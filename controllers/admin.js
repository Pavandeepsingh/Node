const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title,
    price,
    imageUrl,
    description
  }).then(r => {
    console.log('Created Product!')
    res.redirect('/admin/products');
  })
    .catch(err => console.log(err));
};


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode == false) {
    return res.redirect('/');
  }

  const prodId = req.params.productId;
  Product.findByPk(prodId).then(product => {
    if (!product) {
      res.redirect('/');
    } else {
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: true,
        product: product
      });
    }
  }).catch(err => console.log(err));

};

exports.postEditProduct = (req, res, next) => {
  const { productId, description, price, title, imageUrl } = req.body;
  Product.findByPk(productId)
    .then(
      product => {
        product.title = title;
        product.price = price;
        product.description = description;
        product.imageUrl = imageUrl;
        return product.save();
      }
    )
    .then(r => {
      console.log('UPDATED PRODUCT!!!!')
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findByPk(prodId)
    .then(product => {
      return product.destroy()
    })
    .then(r => {
      console.log('Destroyed Product');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    }).catch(err => console.log(err));
};
