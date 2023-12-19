import { PixbayAPI } from "../actions/PixbayAPI.js";

export const MoreBtn = (input) => {
  let pageNum = 1;
  const div = document.createElement("div");
  div.className = "flex justify-center";
  const button = document.createElement("button");
  button.type = "button";
  button.className = `
  bg-slate-700
  text-slate-200
  py-2
  px-3
  m-1
  rounded-lg
  hover:text-slate-700
  hover:bg-slate-300
  font-bold
  border
  shadow-xl
  `;
  button.innerText = "More";

  button.addEventListener("click", async () => {
    pageNum++;
    await PixbayAPI(input.value, pageNum);
  });
  div.appendChild(button);
  return div;
};
