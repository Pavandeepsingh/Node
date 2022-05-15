const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// pug
// app.set('view engine', 'pug');
// app.set('views','views')

//Handle
app.engine('hbs', expressHbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views','views')


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/admin",adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send(`<div style="width:100%; display:flex; justify-content:center;">
    //             <h1>Page not found</h1>
    //             </div>`);

    // res.sendFile(path.join(__dirname,"views","404.html"));

    // res.status(404).render("404.pug",{pageTitle:"Page Not Found"})

    res.status(404).render("404.hbs",{pageTitle:"Page Not Found"})
});

app.listen(3000);