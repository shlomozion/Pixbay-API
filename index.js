import { PixbayAPI } from "./actions/PixbayAPI.js";
import { FavoritesBtn } from "./favorites/FavoritesBtn.js";
import { Form } from "./form/form.js";
import { MoreBtn } from "./moreBtn/MoreBtn.js";

await PixbayAPI();
const topBarElement = document.getElementById("topbar");
topBarElement.className = "p-2 bg-slate-500 text-slate-50 font-bold";

const formObj = Form();
const { form, input } = formObj;

const formElement = document.getElementById("form");
formElement.appendChild(form);
formElement.after(FavoritesBtn());

const resultsElement = document.getElementById("results");
resultsElement.after(MoreBtn(input));
