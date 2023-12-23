import { PixbayAPI } from "./actions/PixbayAPI.js";
import { NavBtn } from "./navBtn/NavBtn.js";
import { Form } from "./form/form.js";
import { MoreBtn } from "./moreBtn/MoreBtn.js";
import { GetFavorites } from "./actions/GetFavorites.js";

await PixbayAPI();
const topBarElement = document.getElementById("topbar");
topBarElement.className = "p-2 bg-slate-500 text-slate-50 font-bold";

const formObj = Form();
const { form, input } = formObj;

const formElement = document.getElementById("form");
formElement.appendChild(form);
formElement.after(
  NavBtn(
    `Favorites &#9829;`,
    "border bg-slate-400 p-2 mx-1 font-bold hover:underline",
    GetFavorites
  )
);
formElement.after(
  NavBtn("Home", "border bg-slate-400 p-2 mx-1 font-bold hover:underline", () =>
    PixbayAPI("", 1, "")
  )
);

const resultsElement = document.getElementById("results");
resultsElement.after(MoreBtn(input));
