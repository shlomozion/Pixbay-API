export const badges = (string) => {
  const badgeContainer = document.createElement("div");
  if (String(string).includes(",")) {
    const tagsArr = string.split(",");
    tagsArr.forEach((tag) => {
      badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap max-sm:flex-col justify-center  items-center gap-1 h-fit `;
      const filterBadge = document.createElement("div");
      filterBadge.addEventListener("click", () => console.log(tag));
      filterBadge.innerHTML = tag;
      filterBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold flex whitespace-nowrap text-center hover:cursor-pointer hover:bg-slate-600 hover:text-slate-50`;
      badgeContainer.appendChild(filterBadge);
    });
  } else if (string === "&#9829;") {
    badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap gap-1 h-fit justify-end`;
    const favoriteBadge = document.createElement("div");
    favoriteBadge.innerHTML = string;
    favoriteBadge.className = ` hover:cursor-pointer hover:bg-white hover:text-red-500 bg-red-500  px-3 max-sm:py-2 py-1	text-4xl text-white shadow-md rounded-full font-bold flex text-center`;

    badgeContainer.appendChild(favoriteBadge);
  } else {
    const likesBadge = document.createElement("div");
    badgeContainer.className = "flex justify-center";
    likesBadge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold  whitespace-nowrap w-fit text-center`;
    likesBadge.innerHTML = `&#128077; ${string}`;
    badgeContainer.appendChild(likesBadge);
  }
  return badgeContainer;
};
