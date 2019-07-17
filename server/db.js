const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://Michael:mongodepot@cluster0-ibbip.mongodb.net/homedepot?retryWrites=true&w=majority');

const saltRounds = 10;

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

const usersSchema = mongoose.Schema({
  username: String,
  password: String
})

const userViewsSchema = mongoose.Schema({
  username: String,
  id: Number
})

const itemList = mongoose.model('ItemList', itemSchema);
const cartList = mongoose.model('Cart', cartSchema);
const usersList = mongoose.model('UserList', usersSchema);
const userViews = mongoose.model('UserViews', userViewsSchema);

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

const newAccount = (creds, cb) => {
  usersList.find({username: creds.username})
  .then((data) => {
    if (data.length === 0){
      bcrypt.hash(creds.password, saltRounds, function(err, hash) {
        let newUser = new usersList({
          username: creds.username,
          password: hash
        })
        newUser.save(() => cb('Logged In'))
      });
    } else {
      cb('username exists');
    }
  })
}

const login = (creds, cb) => {
  usersList.find({username: creds.username})
  .then((data) => {
    if (data.length === 0){
      cb('username does not exist');
      return;
    } else {
      bcrypt.compare(creds.password, data[0].password, function(err, res) {
        if (res) {
          cb('Logged In');
          return;
        } else {
          cb('Password incorrect')
        }
      });
    }
  })
}

const previousViews = (data, cb) => {
  let newView = new userViews({
    username: data.username,
    id: data.id
  })
  newView.save((cb('savedView')))
}

const getUserViews = (cb) => {
  userViews.find()
  .then((data) => {
    cb(data);
  })
}

module.exports = { getAll, addToCart, getAllandCart, newAccount, login, previousViews, getUserViews };
