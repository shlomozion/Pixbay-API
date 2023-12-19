const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

app.post("/", (req, res) => {
  const { input, pageNum } = req.body;
  try {
    fetch(`https://pixabay.com/api/?key=41151122-f8eb0ebcdf4975643bb0bf190&q=${
      input ? encodeURIComponent(input) : ""
    }&page=${pageNum}&orientation=vertical&per_page=20
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
