import { Image } from "./Image.js";
import { Badges } from "./Badges.js";
import { Modal } from "../modal/Modal.js";
import { LikeBtn } from "./LikeBtn.js";
import { UnlikeBtn } from "./UnlikeBtn.js";

export const Card = (item) => {
  const { tags, webformatURL, id } = item;

  const cardElement = document.createElement("div");
  cardElement.className = `h-fit flex flex-col hover:border hover:border-slate-300 hover:rounded-xl hover:shadow-xl gap-2 p-2 group hover:bg-slate-200`;
  cardElement.id = id;

  const imageContainer = document.createElement("div");
  imageContainer.className = "flex justify-center w-full hover:cursor-pointer";
  imageContainer.addEventListener("click", () => {
    const modal = Modal(item);
    const [body] = document.getElementsByTagName("body");
    body.appendChild(modal);
    modal.showModal();
  });
  imageContainer.appendChild(Image(webformatURL));
  cardElement.appendChild(imageContainer);

  cardElement.appendChild(Badges(tags));

  const buttonToggle = () => {
    const favorites = localStorage.getItem("pic-id")?.match(id);
    if (!favorites) {
      cardElement.removeChild(unlikeBtn);
      cardElement.appendChild(likeBtn);
    }
    if (favorites) {
      cardElement.removeChild(likeBtn);
      cardElement.appendChild(unlikeBtn);
    }
  };
  const favorites = localStorage.getItem("pic-id")?.match(id);
  const likeBtn = LikeBtn(id);
  likeBtn.addEventListener("click", buttonToggle);
  !favorites && cardElement.appendChild(likeBtn);

  const unlikeBtn = UnlikeBtn(item);
  unlikeBtn.addEventListener("click", buttonToggle);
  favorites && cardElement.appendChild(unlikeBtn);

  return cardElement;
};
