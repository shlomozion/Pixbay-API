export const badges = (string) => {
  console.log("file: badges.js:2 ~ badges ~ tags:", string);

  const badgeContainer = document.createElement("div");
  if (String(string).includes(",")) {
    const tagsArr = string.split(",");
    tagsArr.forEach((tag) => {
      badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap gap-1 h-fit `;
      const badge = document.createElement("div");
      badge.innerHTML = tag;
      badge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold flex whitespace-nowrap text-center hover:cursor-pointer`;
      badgeContainer.appendChild(badge);
    });
  } else if (string === "&#9829;") {
    badgeContainer.className = `transition-opacity ease-in-out group-hover:opacity-100 opacity-0 flex w-full flex-wrap gap-1 h-fit justify-end`;
    const badge = document.createElement("div");
    badge.innerHTML = string;
    badge.className = ` hover:cursor-pointer hover:bg-white hover:text-red-500 bg-red-500 px-2 	text-4xl text-white shadow-md rounded-full font-bold flex text-center`;

    badgeContainer.appendChild(badge);
  } else {
    const badge = document.createElement("div");
    badge.className = `border py-[0.2rem] px-[0.3rem] bg-slate-50 text-slate-600 shadow-md text-sm rounded font-bold flex whitespace-nowrap text-center`;
    badge.innerHTML = `&#128077; ${string}`;
    badgeContainer.appendChild(badge);
  }
  return badgeContainer;
};
