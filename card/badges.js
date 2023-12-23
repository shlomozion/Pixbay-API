import { PixbayAPI } from "../actions/PixbayAPI.js";
export const badges = (string) => {
  const badgeContainer = document.createElement("div");

  if (String(string).includes(",")) {
    const tagsArr = string.split(",");
    tagsArr.forEach((tag) => {
      badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap max-sm:flex-col justify-center  items-center gap-1 h-fit `;
      const filterBadge = document.createElement("div");
      filterBadge.addEventListener("click", () => PixbayAPI(tag), {
        once: true,
      });
      filterBadge.innerHTML = tag;
      filterBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold flex whitespace-nowrap text-center hover:cursor-pointer hover:bg-slate-600 hover:text-slate-50`;
      badgeContainer.appendChild(filterBadge);
    });
  } else {
    const likesBadge = document.createElement("div");
    badgeContainer.className = "flex justify-center";
    likesBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold  whitespace-nowrap w-fit text-center`;
    likesBadge.innerHTML = `&#128077; ${string}`;
    badgeContainer.appendChild(likesBadge);
  }
  return badgeContainer;
};
