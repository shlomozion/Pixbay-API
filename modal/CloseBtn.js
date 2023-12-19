export const CloseBtn = () => {
  const closeBtn = document.createElement("button");
  const closeBtnDiv = document.createElement("div");

  closeBtnDiv.className = "flex justify-end  px-1";
  closeBtn.className = `bg-slate-700 text-slate-200 py-2 px-3 rounded-lg hover:text-slate-700 hover:bg-slate-300 font-bold`;
  closeBtn.innerHTML = "X";

  closeBtnDiv.appendChild(closeBtn);
  return closeBtnDiv;
};
