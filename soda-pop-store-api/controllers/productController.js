const db = require('../models/db');

// GET all
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
};

// GET by ID
exports.getProductById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar produto' });
  }
};

// POST
exports.createProduct = async (req, res) => {
  const { name, description, image_url, origin_country, price, stock } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO products (name, description, image_url, origin_country, price, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, image_url, origin_country, price, stock]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
};

// PUT
exports.updateProduct = async (req, res) => {
  const { name, description, image_url, origin_country, price, stock } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE products SET name = ?, description = ?, image_url = ?, origin_country = ?, price = ?, stock = ? WHERE id = ?',
      [name, description, image_url, origin_country, price, stock, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json({ id: req.params.id, ...req.body });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar produto' });
  }
};
