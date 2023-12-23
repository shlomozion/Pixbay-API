export const UserImage = (userImageURL, user, user_id) => {
  const anchor = document.createElement("a");
  anchor.href = `https://pixabay.com/users/${user}-${user_id}`;
  anchor.target = "_blank";
  anchor.className = "flex justify-center hover:cursor-pointer";

  const image = document.createElement("img");
  image.alt = "user-image";
  image.src = userImageURL;
  image.className = "rounded-full w-[45%]";

  anchor.appendChild(image);

  return anchor;
};
