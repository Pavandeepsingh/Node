exports.get404 = (req, res, next) => {
    // res.status(404).send(`<div style="width:100%; display:flex; justify-content:center;">
    //             <h1>Page not found</h1>
    //             </div>`);

    // res.sendFile(path.join(__dirname,"views","404.html"));

    // res.status(404).render("404.pug",{pageTitle:"Page Not Found"})

    // res.status(404).render("404.hbs",{pageTitle:"Page Not Found"})

    res.status(404).render("404.ejs",{pageTitle:"Page Not Found"})
};