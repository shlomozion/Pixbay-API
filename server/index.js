const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const { input, pageNum, id } = req.body;
  try {
    fetch(
      `${process.env.API_URL}/?key=${process.env.KEY}&q=${
        input ? encodeURIComponent(input) : ""
      }&page=${pageNum}&orientation=vertical&id=${id ? id : ""}`
    )
      .then((res) => res.json())
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
