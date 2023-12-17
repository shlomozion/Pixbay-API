import { card } from "../card/card.js";

export const PixbayAPI = async (input, pageNum) => {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=41151122-f8eb0ebcdf4975643bb0bf190&q=${
        input ? encodeURIComponent(input) : ""
      }&page=${pageNum}&orientation=vertical&per_page=20`
    );
    const data = await res.json();

    const resultsElement = document.getElementById("results");
    resultsElement.className = `
      p-8
      border
      border-slate-200
      h-[70vh]
      overflow-y-scroll
      grid
      grid-cols-2
      gap-2
      lg:grid-cols-3
      `;

    data.hits.map((item) => resultsElement.appendChild(card(item)));
    return resultsElement;
  } catch (error) {
    console.log(error);
  }
};
