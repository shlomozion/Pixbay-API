import { image } from "./image.js";
import { badges } from "./badges.js";
import { Modal } from "../modal/Modal.js";

export const card = (item) => {
  const { tags, webformatURL } = item;

  const cardElement = document.createElement("div");
  cardElement.className = `
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
  `;
  const imageContainer = document.createElement("div");
  imageContainer.className = "flex justify-center w-full hover:cursor-pointer";

  imageContainer.addEventListener("click", () => {
    const modal = Modal(item);
    const [body] = document.getElementsByTagName("body");
    body.appendChild(modal);
    modal.showModal();
  });
  imageContainer.appendChild(image(webformatURL));
  cardElement.appendChild(imageContainer);
  cardElement.appendChild(badges(tags));
  cardElement.appendChild(badges("&#9829;"));
  return cardElement;
};
