import mongoose from "mongoose";

const LineItemSchema = new mongoose.Schema({
  name: {},
  description: {},
  quantity: {},
  rate: {},
});

export default mongoose.models.LineItem ||
  mongoose.model("LineItem", LineItemSchema);
