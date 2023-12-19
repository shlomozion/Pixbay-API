export const UserImage = (userImageURL, user, user_id) => {
  const div = document.createElement("a");
  div.href = `https://pixabay.com/users/${user}-${user_id}`;
  div.target = "_blank";
  div.className = "flex justify-center hover:cursor-pointer";
  const image = document.createElement("img");
  image.alt = "user-image";
  image.src = userImageURL;
  image.className = "rounded-full w-[45%]";
  div.appendChild(image);
  return div;
};
