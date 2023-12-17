export const badges = (tags) => {
  const tagsArr = tags.split(",");

  const badgeContainer = document.createElement("div");

  badgeContainer.className = `
    transition-opacity ease-in-out 
    group-hover:opacity-100
    opacity-0
    flex
    w-fit
    flex-wrap
    gap-1
    h-fit
    `;

  tagsArr.forEach((tag) => {
    const badge = document.createElement("div");
    badge.innerText = tag;
    badge.className = `
    border
    py-[0.2rem]
    px-[0.3rem]
    bg-slate-50
    text-slate-600
    shadow-md
    text-xs
    rounded
    font-bold
    flex
    whitespace-nowrap
    text-center
    `;
    return badgeContainer.appendChild(badge);
  });
  return badgeContainer;
};
