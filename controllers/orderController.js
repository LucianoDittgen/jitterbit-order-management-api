const Order = require("../models/Order");

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

    newOrder.save();

    res
      .status(201)
      .json({ message: "Pedido criado com sucesso", order: newOrder });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro interno ao criar pedido", details: error.message });
  }
};

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
