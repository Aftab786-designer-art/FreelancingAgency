// backend/models/Form.js
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  whatsapp: { type: String, required: true },
  projectScope: { type: String },
});

module.exports = mongoose.model("Form", formSchema);
