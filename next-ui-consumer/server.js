const express = require("express");
const next = require("next");
var cors = require("cors");
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const fruits = [{ name: "banana" }, { name: "apple" }];

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(express.json());

  server.get("/fruits", (req, res) => {
    return res.status(200).send(fruits);
  });

  server.post("/addFruit", (req, res) => {
    const {
      body: { name },
    } = req;
    return res.status(200).json([...fruits, { name }]);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
