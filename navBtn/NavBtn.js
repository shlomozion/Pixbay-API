export const NavBtn = (title, className, method) => {
  const button = document.createElement("button");
  button.innerHTML = title;
  button.className = className;
  button.addEventListener("click", method);
  return button;
};
