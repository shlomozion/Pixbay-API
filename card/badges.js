import { PixbayAPI } from "../actions/PixbayAPI.js";

export const Badges = (string) => {
  const badgeContainer = document.createElement("div");

  if (String(string).includes(",")) {
    const tagsArr = string.split(",");
    badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap max-sm:flex-col justify-center  items-center gap-1 h-fit `;

    tagsArr.forEach((tag) => {
      const filterBadge = document.createElement("div");
      filterBadge.innerHTML = tag;
      filterBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold flex whitespace-nowrap text-center hover:cursor-pointer hover:bg-slate-600 hover:text-slate-50`;
      filterBadge.addEventListener("click", () => PixbayAPI(tag), {
        once: true,
      });
      badgeContainer.appendChild(filterBadge);
    });
  } else {
    badgeContainer.className = "flex justify-center";
    const likesBadge = document.createElement("div");
    likesBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold  whitespace-nowrap w-fit text-center`;
    likesBadge.innerHTML = `&#128077; ${string}`;
    badgeContainer.appendChild(likesBadge);
  }
  return badgeContainer;
};
