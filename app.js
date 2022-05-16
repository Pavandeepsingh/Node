const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// pug
// app.set('view engine', 'pug');
// app.set('views','views')

//Handle
// const expressHbs = require('express-handlebars');
// app.engine('hbs', expressHbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: 'hbs' }));
// app.set('view engine', 'hbs');
// app.set('views','views')


// EJS
app.set('view engine', 'ejs');
app.set('views','views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./controllers/error')

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);