// models/menuItem.js

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
