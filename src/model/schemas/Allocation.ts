import mongoose, { Types } from "mongoose";

const AllocationSchema = new mongoose.Schema({
  cnpj: {
    type: String,
    required: true,
  },
  razaoSocial: {
    type: String,
    required: true,
  },
  operacao: {
    type: String,
    enum: ["compra", "venda"],
    required: true,
  },
  dataOperacao: {
    type: String,
    required: true,
  },
  cotas: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

export const Allocation = mongoose.model("Allocation", AllocationSchema);
