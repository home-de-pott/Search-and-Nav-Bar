const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Michael:mongodepot@cluster0-ibbip.mongodb.net/homedepot?retryWrites=true&w=majority');

let itemSchema = mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  category: String
});

const cartSchema = mongoose.Schema({
  cookie: String,
  id: Number,
  price: Number,
  name: String
})

const itemList = mongoose.model('ItemList', itemSchema);
const cartList = mongoose.model('Cart', cartSchema);

// const save = () => {
//   allItems.map((newItem)=>{
//     const item = new itemList(newItem);
//     item.save(() => {
//       console.log('item saved to database');
//     })
//   })
// }

const addToCart = (item, cb) => {
  let cart = new cartList({
    cookie: item.cookie,
    id: item.item.id,
    price: item.item.price,
    name: item.item.name
  });
  cart.save(() => {cb('item saved')})
}

const getAll = (cb) => {
  itemList.find()
  .then((data) => cb(data))
}

const getAllandCart = (userCookie, cb) => {
  itemList.find()
  .then((data) => {
  cartList.find({cookie: userCookie})
  .then((results) => {
    cb(data, results)
  })
})
}

const newAccount = (creds) => {
  console.log(creds)
}

const login = (creds) => {
  console.log(creds)
}

module.exports = { getAll, addToCart, getAllandCart, newAccount, login };
