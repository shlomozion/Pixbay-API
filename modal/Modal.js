import { CloseBtn } from "./CloseBtn.js";
import { Image } from "../card/Image.js";
import { UserImage } from "./UserImage.js";
import { Badges } from "../card/Badges.js";
import { LinkToPixbaySite } from "./LinkToPixbaySite.js";

export const Modal = (item) => {
  const { tags, webformatURL, user, pageURL, userImageURL, user_id, likes } =
    item;

  const dialog = document.createElement("dialog");
  dialog.className = "rounded-xl bg-slate-50";

  const closeBtn = CloseBtn();
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  const container = document.createElement("div");
  container.className = "md:flex";

  const imageRow = document.createElement("div");
  imageRow.className = "h-full";

  const dataRow = document.createElement("div");
  dataRow.className = "flex flex-col gap-6 justify-center md:gap-12 p-2";

  const userDiv = document.createElement("div");
  userDiv.className =
    "font-bold whitespace-nowrap flex flex-col  gap-1 p-2 items-center mx-6 bg-slate-100 rounded-2xl shadow-xl";
  userDiv.appendChild(UserImage(userImageURL, user, user_id));
  userDiv.append(user);

  const tagComponent = document.createElement("div");
  tagComponent.className = "flex gap-1 justify-center";
  tags.split(",").forEach((string) => {
    const tagElement = document.createElement("div");
    tagElement.className =
      "border shadow-xl font-bold text-slate-600 rounded text-xs py-1 px-3";
    tagElement.innerHTML = string;
    tagComponent.appendChild(tagElement);
  });

  const likesBadge = Badges(likes);

  imageRow.appendChild(closeBtn);
  imageRow.appendChild(Image(webformatURL));
  dataRow.appendChild(userDiv);
  dataRow.appendChild(likesBadge);
  dataRow.appendChild(likesBadge);
  dataRow.appendChild(tagComponent);
  dataRow.appendChild(LinkToPixbaySite(pageURL));
  container.appendChild(imageRow);
  container.appendChild(dataRow);
  dialog.appendChild(container);
  return dialog;
};
