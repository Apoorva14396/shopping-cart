var Product = require("../models/product.js");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/shopping-cart");
var products = [
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome game!!!",
    price: 10
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
    title: "Star Wars",
    description: "Awesome game!!!",
    price: 10
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
