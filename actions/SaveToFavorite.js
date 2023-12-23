export const SaveToFavorite = (id) => {
  let idArr = localStorage.getItem("pic-id");
  if (!idArr) {
    localStorage.setItem("pic-id", id);
  } else {
    idArr = [idArr, id];
    localStorage.setItem("pic-id", idArr);
  }
  return;
};
