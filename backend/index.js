import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import Pedidos from "./models/pedidos.js";

const app = express();

app.use(express.json());

app.get("/", async (req, response) => {
    const users = await User.find()
    return response.json(users);
});

app.post("/", async (request, response) => {
  // const name = request.body.name
  // const age = request.body.age

  const user = request.body;

  const newUser = await User.create(user)

  return response.json(newUser);
});

app.get("/pedidos", async (request, response) => {
    const pedidos = await Pedidos.find()
    return response.json(pedidos)
})

app.post("/pedidos", async (request, response) => {
    const pedido = request.body
    const novoPedido = await Pedidos.create(pedido)
    return response.json(novoPedido)
})

mongoose
  .connect(
    "mongodb+srv://robsonsantanarodrigues2022:ldA7zWXMkQG9rjvT@cluster0.jlnyyvs.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch(() => {
    console.log("DEU RUIM");
  });

app.listen(3000, () => {
  console.log("servidor iniciado");
});
