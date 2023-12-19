import { badges } from "../card/badges.js";
import { image } from "../card/image.js";
import { CloseBtn } from "./CloseBtn.js";
import { LinkToPixbaySite } from "./LinkToPixbaySite.js";
import { UserImage } from "./UserImage.js";
export const Modal = (item) => {
  console.log("file: Modal.js:2 ~ Modal ~ item:", item);
  const { tags, webformatURL, user, pageURL, userImageURL, user_id, likes } =
    item;

  const tagComponent = badges(tags);
  const likesBadge = badges(likes);

  tagComponent.classList.remove("opacity-0");

  const dialog = document.createElement("dialog");
  dialog.className = "rounded-xl bg-slate-300 shadow-xl p-1 shadow-xl";

  const container = document.createElement("div");
  container.className = "flex gap-2";

  const closeBtn = CloseBtn();

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  const dataRow = document.createElement("div");
  const imageRow = document.createElement("div");
  const userDiv = document.createElement("div");
  userDiv.className =
    "font-bold whitespace-nowrap flex flex-col items-center gap-1 p-2 mx-6 bg-slate-100 rounded-2xl shadow-xl";
  userDiv.appendChild(UserImage(userImageURL, user, user_id));
  userDiv.append(user);
  dataRow.className =
    "flex flex-col gap-8 p-2 m-2 mt-12 justify-center items-center bg-slate-200 rounded-xl";
  imageRow.className = "p-2";

  container.appendChild(imageRow);
  dataRow.appendChild(userDiv);
  dataRow.appendChild(tagComponent);
  dataRow.appendChild(likesBadge);
  dataRow.appendChild(LinkToPixbaySite(pageURL));
  container.appendChild(dataRow);
  imageRow.appendChild(image(webformatURL));
  container.appendChild(closeBtn);
  dialog.appendChild(container);
  return dialog;
};
