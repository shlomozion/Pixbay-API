import { Card } from "../card/Card.js";
import { Loader } from "../loader/Loader.js";

export const PixbayAPI = async (input, pageNum, id) => {
  const loader = Loader();
  const resultsElement = document.getElementById("results");
  resultsElement.innerHTML = "";
  resultsElement.className = "flex justify-center";
  resultsElement.appendChild(loader);
  try {
    const res = await fetch(`http://localhost:3000/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, pageNum, id }),
    });

    const data = await res.json();
    if (data.hits.length > 1) {
      resultsElement.innerHTML = "";
      resultsElement.className = `p-4 border border-slate-200 h-[68vh] overflow-y-scroll grid max-sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3`;
      data.hits.map((item) => resultsElement.appendChild(Card(item)));
      resultsElement.scrollTo({ top: 100, left: 100, behavior: "instant" });
      return resultsElement;
    } else {
      return data.hits;
    }
  } catch (error) {
    console.log(error);
  }
};

// const res =
//   await fetch(`https://pixabay.com/api/?key=41151122-f8eb0ebcdf4975643bb0bf190&q=${
//     input ? encodeURIComponent(input) : ""
//   }&page=${pageNum}&orientation=vertical&per_page=20
// `);
