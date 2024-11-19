const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Hiển thị danh sách sản phẩm
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.render('products/index', { products });
});

// Trang thêm sản phẩm
router.get('/add', (req, res) => {
    res.render('products/add');
});

// Xử lý thêm sản phẩm
router.post('/add', async (req, res) => {
    await Product.create(req.body);
    res.redirect('/products');
});

// Trang chỉnh sửa sản phẩm
router.get('/edit/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.render('products/edit', { product });
});

// Xử lý chỉnh sửa sản phẩm
router.post('/edit/:id', async (req, res) => {
    await Product.update(req.body, { where: { id: req.params.id } });
    res.redirect('/products');
});

// Xử lý xoá sản phẩm
router.post('/delete/:id', async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.redirect('/products');
});

module.exports = router;
