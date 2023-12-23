import { GetFavorites } from "../actions/GetFavorites.js";

export const FavoritesBtn = () => {
  const button = document.createElement("button");

  button.innerHTML = `Favorites &#9829;`;
  button.className = "border bg-slate-400 p-2 ";
  button.addEventListener("click", () => GetFavorites());
  return button;
};
