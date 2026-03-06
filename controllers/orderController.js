const Order = require("../models/Order");

// 1. Criar pedido (Obrigatório)
exports.createOrder = async (req, res) => {
  try {
    const payload = req.body;

    const mappedData = {
      orderId: payload.numeroPedido,
      value: payload["valor Total"],
      creationDate: payload.dataCriacao,
      items: payload.items.map((item) => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeltem,
        price: item.valorltem,
      })),
    };

    const newOrder = new Order(mappedData);
    const savedOrder = await newOrder.save();

    res
      .status(201)
      .json({ message: "Pedido criado com sucesso", order: savedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro interno ao criar pedido", details: error.message });
  }
};

// 2. Obter pedido por ID (Obrigatório)
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findOne({ orderId: orderId });

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pedido" });
  }
};

// 3. Listar todos os pedidos (Opcional)
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar pedidos" });
  }
};

// 4. Atualizar pedido (Opcional)
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updateData = req.body;

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: orderId },
      updateData,
      { new: true }, // Garante que a resposta traga o JSON atualizado
    );

    if (!updatedOrder) {
      return res
        .status(404)
        .json({ message: "Pedido não encontrado para atualização" });
    }

    res.status(200).json({ message: "Pedido atualizado", order: updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar pedido", details: error.message });
  }
};

// 5. Deletar pedido (Opcional)
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findOneAndDelete({ orderId: orderId });

    if (!deletedOrder) {
      return res
        .status(404)
        .json({ message: "Pedido não encontrado para deleção" });
    }

    res.status(200).json({ message: "Pedido deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar pedido" });
  }
};
