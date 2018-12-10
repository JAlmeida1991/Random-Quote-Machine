const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  fsPromiseAPI = require("fs").promises;

app.use(express.static("dist"));

app.get("/quotes", (req, res) => res.sendFile(__dirname + "/api/quotes.json"));

app.get("/quotes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await fsPromiseAPI.readFile(
      __dirname + "/api/quotes.json",
      "utf8"
    );
    const obj = JSON.parse(data)[id];
    if (!obj) return res.status(404).json({ error: "Post was not found..." });
    res.json(obj);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Default to index.html if route is not recognized

app.get("*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.listen(port, () => console.log(`server has started on port ${port}`));
