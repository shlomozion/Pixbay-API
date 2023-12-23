// import { PixbayAPI } from "../actions/PixbayAPI.js";

import { SaveToFavorite } from "../actions/SaveToFavorite.js";

export const LikeBtn = (id) => {
  const btnContainer = document.createElement("div");
  btnContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap gap-1 h-fit justify-end`;
  const favoriteBtn = document.createElement("div");
  favoriteBtn.addEventListener("click", () => SaveToFavorite(id));
  favoriteBtn.innerHTML = "&#9829;";
  favoriteBtn.className = ` hover:cursor-pointer hover:bg-white hover:text-red-500 bg-red-500  px-3 max-sm:py-2 py-1	text-4xl text-white shadow-md rounded-full font-bold flex text-center`;

  btnContainer.appendChild(favoriteBtn);
  return btnContainer;
};
