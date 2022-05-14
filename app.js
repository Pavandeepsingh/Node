const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send(`<div style="width:100%; display:flex; justify-content:center;">
    //             <h1>Page not found</h1>
    //             </div>`);

    res.sendFile(path.join(__dirname,"views","404.html"));
});

app.listen(3000);