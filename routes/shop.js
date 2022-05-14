const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from express!</h1>');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render("shop", {prods: products, pageTitle: 'Shop Page', path: "/"});
});

module.exports = router;