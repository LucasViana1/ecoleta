import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);

// // rotas exemplos
// const users = ["Lucas", "Viana", "Cunha"];

// app.get("/users", (request, response) => {
//   const search = String(request.query.search);

//   const filteredUsers = search
//     ? users.filter((user) => user.includes(search))
//     : users;

//   return response.json(filteredUsers);
// });

// app.get("/users/:id", (request, response) => {
//   const id = Number(request.params.id);
//   return response.json(users[id]);
// });

// app.post("/users", (request, response) => {
//   const data = request.body;

//   return response.json(data);
// });
