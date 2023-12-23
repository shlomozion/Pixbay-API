const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

app.post("/", (req, res) => {
  const { input, pageNum, id } = req.body;
  // console.log("file: index.js:12 ~ app.post ~ id:", id);
  try {
    fetch(`https://pixabay.com/api/?key=41151122-f8eb0ebcdf4975643bb0bf190&q=${
      input ? encodeURIComponent(input) : ""
    }&page=${pageNum}&orientation=vertical&id=${id ? id : ""}
    `)
      .then((res) => res.json())
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
