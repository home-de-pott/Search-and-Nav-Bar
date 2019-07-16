const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Michael:mongodepot@cluster0-ibbip.mongodb.net/homedepot?retryWrites=true&w=majority');

let itemSchema = mongoose.Schema({
  id: String,
  name: String,
  price: Number
});

let cartSchema = mongoose.Schema({
  cookie: String,
  id: Number,
  price: Number,
  name: String
})

let itemList = mongoose.model('ItemList', itemSchema);
let cartList = mongoose.model('Cart', cartSchema);

// let save = () => {
//   allItems.map((newItem)=>{
//     let item = new itemList(newItem);
//     item.save(() => {
//       console.log('item saved to database');
//     })
//   })
// }

let addToCart = (item, cb) => {
  let cart = new cartList({
    cookie: item.cookie,
    id: item.item.id,
    price: item.item.price,
    name: item.item.name
  });
  cart.save(() => {cb('item saved')})
}

let getAll = (cb) => {
  itemList.find()
  .then((data) => cb(data))
}

let getAllandCart = (userCookie, cb) => {
  itemList.find()
  .then((data) => {
  cartList.find({cookie: userCookie})
  .then((results) => {
    console.log(userCookie)
    cb(data, results)
  })
})
}

module.exports = { getAll, addToCart, getAllandCart };
