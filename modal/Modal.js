export const Modal = (item) => {
  const { tags } = item;
  const dialog = document.createElement("dialog");
  dialog.className =
    "w-2/3 md:w-2/4 h-[60%] rounded-xl bg-slate-200 shadow-xl p-1";
  const container = document.createElement("div");
  container.className = "flex justify-end ";
  const closeBtn = document.createElement("button");
  closeBtn.className = `bg-slate-700 text-slate-200 py-2 px-3 rounded-lg hover:text-slate-700 hover:bg-slate-300 font-bold`;
  closeBtn.innerHTML = "X";
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
  container.append(tags);
  container.appendChild(closeBtn);
  dialog.appendChild(container);
  return dialog;
};
