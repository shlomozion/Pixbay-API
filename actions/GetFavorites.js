import { card } from "../card/card.js";
import { PixbayAPI } from "./PixbayAPI.js";

export const GetFavorites = async () => {
  const favoriteArr = localStorage.getItem("pic-id").split(",");

  const resultsElement = document.getElementById("results");
  resultsElement.className = "flex justify-center";

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

  resultsElement.className = "";
  resultsElement.innerHTML = "";
  arr.flat().forEach((item) => {
    resultsElement.appendChild(card(item));
  });
  return favoriteArr;
};
