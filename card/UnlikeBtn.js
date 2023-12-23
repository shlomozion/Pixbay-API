// import { GetFavorites } from "../actions/GetFavorites.js";

export const UnlikeBtn = (item) => {
  const { id } = item;
  const picId = id;
  const btnContainer = document.createElement("div");
  btnContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap mt-2 h-fit justify-end`;
  const btn = document.createElement("div");

  btn.addEventListener("click", () => {
    const newFavorites = localStorage
      .getItem("pic-id")
      .split(",")
      .filter((Id) => picId != Id);

    localStorage.clear();
    localStorage.setItem("pic-id", newFavorites);
    // GetFavorites();
  });
  btn.innerHTML = "Remove from favorites";
  btn.className = ` hover:cursor-pointer hover:bg-white hover:text-red-500 bg-red-500  px-3 max-sm:py-2 py-1	text-sm text-white shadow-md rounded font-bold flex text-center`;

  btnContainer.appendChild(btn);
  return btnContainer;
};
