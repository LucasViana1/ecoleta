import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json({ text: "ola!!" });
});

app.listen(3333);
