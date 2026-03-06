const express = require("express");
const mongoose = require("mongoose");
const orderController = require("./controllers/orderController");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());

// Rotas da API
app.post("/order", orderController.createOrder);
app.get("/order/list", orderController.listOrders);
app.get("/order/:id", orderController.getOrderById);
app.put("/order/:id", orderController.updateOrder);
app.delete("/order/:id", orderController.deleteOrder);

// Configurações de Ambiente
const PORT = process.env.PORT || 3000;
const MONGO_URI =
	process.env.MONGO_URI || "mongodb://localhost:27017/jitterbit_db";

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log("Conectado ao MongoDB!");
		app.listen(PORT, () => {
			console.log(`Servidor rodando na porta ${PORT}`);
		});
	})
	.catch((err) => console.error("Erro ao conectar no banco:", err));
