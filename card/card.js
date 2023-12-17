import { image } from "./image.js";
import { badges } from "./badges.js";
import { Modal } from "../modal/Modal.js";

export const card = (item) => {
  const { tags, webformatURL } = item;

  const element = document.createElement("div");
  element.className = `
  flex
  flex-col
  hover:border 
  hover:border-slate-300 
  hover:rounded-xl
  hover:shadow-xl
  gap-2
  p-2
  group
  hover:bg-slate-200
  hover:cursor-pointer
  
  `;
  element.addEventListener("click", () => {
    const modal = Modal(item);
    const [body] = document.getElementsByTagName("body");
    body.appendChild(modal);
    modal.showModal();
  });
  element.appendChild(image(webformatURL));
  element.appendChild(badges(tags));
  return element;
};
