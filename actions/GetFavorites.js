import { Card } from "../card/Card.js";
import { PixbayAPI } from "./PixbayAPI.js";

export const GetFavorites = async () => {
  const favoriteArr = localStorage.getItem("pic-id").split(",");

  const resultsElement = document.getElementById("results");
  resultsElement.className = "flex justify-center ";

  if (favoriteArr == "") {
    resultsElement.innerHTML = "you have no favorites";
    return;
  }

  const getFavData = async () => {
    const promises = favoriteArr.map((id) => PixbayAPI("", "", id));
    const dataArray = await Promise.all(promises);
    return dataArray;
  };

  const arr = await getFavData();

  resultsElement.className = `p-4 border border-slate-200 h-[68vh] overflow-y-scroll grid max-sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3`;
  resultsElement.innerHTML = "";
  resultsElement.scrollTo({ top: 100, left: 100, behavior: "instant" });
  arr.flat().forEach((item) => {
    resultsElement.appendChild(Card(item));
  });
};
