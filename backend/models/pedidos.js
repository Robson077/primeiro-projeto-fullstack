import mongoose from "mongoose";
import user from "./user.js";

const pedidosSchema = mongoose.Schema({
    client: {
        type: [user]
    },

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