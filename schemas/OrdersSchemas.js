const { Schema } = require("mongoose");

const OrdersSchemas = New Schema ({

    name: String,
    qut: Number,
    price: Number,
    mode: String,

});
module.exports = { OrdersSchemas };
