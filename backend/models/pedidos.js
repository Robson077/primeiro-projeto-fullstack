import mongoose from "mongoose";

const pedidosSchema = mongoose.Schema({
    produto: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Pedidos", pedidosSchema)