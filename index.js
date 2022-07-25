

const express = require("express");
const app = express();
const port = "3000";





app.get("/",  (req, res) => {
  res.json({
      message:"HEllO",
  })
});

app.listen(port, () => {
  console.log(`[INFO] Listening on http://localhost:${port}`);
});
