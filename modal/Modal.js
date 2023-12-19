import { badges } from "../card/badges.js";
import { image } from "../card/image.js";
import { CloseBtn } from "./CloseBtn.js";
import { LinkToPixbaySite } from "./LinkToPixbaySite.js";
import { UserImage } from "./UserImage.js";
export const Modal = (item) => {
  const { tags, webformatURL, user, pageURL, userImageURL, user_id, likes } =
    item;

  const tagComponent = badges(tags);
  tagComponent.classList.remove("opacity-0");

  const likesBadge = badges(likes);

  const dialog = document.createElement("dialog");
  dialog.className = "rounded-xl bg-slate-50 shadow-xl  shadow-xl";

  const container = document.createElement("div");
  container.className = "flex ";

  const closeBtn = CloseBtn();

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  const dataRow = document.createElement("div");
  const imageRow = document.createElement("div");
  const userDiv = document.createElement("div");
  userDiv.className =
    "font-bold whitespace-nowrap flex flex-col  gap-1 p-2 items-center mx-6 bg-slate-100 rounded-2xl shadow-xl";
  userDiv.appendChild(UserImage(userImageURL, user, user_id));
  userDiv.append(user);
  dataRow.className = "flex flex-col gap-6 justify-center";
  imageRow.className = "h-full";

  container.appendChild(imageRow);
  dataRow.appendChild(closeBtn);
  dataRow.appendChild(userDiv);
  dataRow.appendChild(tagComponent);
  dataRow.appendChild(likesBadge);
  dataRow.appendChild(LinkToPixbaySite(pageURL));
  container.appendChild(dataRow);
  imageRow.appendChild(image(webformatURL));
  dialog.appendChild(container);
  return dialog;
};
