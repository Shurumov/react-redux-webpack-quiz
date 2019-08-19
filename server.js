const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "public");
const PORT = 3000;
const app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

console.log("to test production build open http://localhost:3000");

app.listen(PORT);