const express = require('express');
const router = express.Router();
const { Partner } = require('../models');

// Hiển thị danh sách đối tác
router.get("/", async (req, res) => {
    try {
        const partners = await Partner.findAll();
        res.render("partner/index", { partners });
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi khi lấy danh sách đối tác");
    }
});

// Form thêm đối tác mới
router.get("/add", (req, res) => {
    res.render("addPartner");
});

// Xử lý thêm đối tác mới
router.post("/add", async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        console.log('add:', req.body);
        await Partner.create({ name, email, phone, address });
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi khi thêm đối tác");
    }
});

router.get("/list", async (req, res) => {
    try {
        const partners = await Partner.findAll();
        const jsonResponse = partners.map(partner => partner.toJSON()); // Chuyển đổi sang JSON
        console.log('list', jsonResponse);
        res.status(200).json(jsonResponse); // Gửi JSON về client
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi khi lấy danh sách đối tác");
    }
});

module.exports = router;
