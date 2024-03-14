// routes/menuRoutes.js

const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

// Route to get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new menu item
router.post('/', async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update a menu item
router.put('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    menuItem.name = req.body.name;
    menuItem.price = req.body.price;
    menuItem.description = req.body.description;

    const updatedMenuItem = await menuItem.save();
    res.json(updatedMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a menu item
router.delete('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    await menuItem.remove();
    res.json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
