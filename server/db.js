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
  password: String,
  sessionCookie: String
})

const userViewsSchema = mongoose.Schema({
  username: String,
  cookie: String,
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

const getAllandCart = (cookie, cb) => {
  itemList.find()
  .then((data) => {
    usersList.find({sessionCookie:cookie})
    .then((users) => {
      let login = {name: '', previouslyViewed: [], showLoginScreen: false, error: ''};
      if (users.length !== 0){
        login.name = users[0].username;
        userViews.find({$or:[{username:login.name}, {cookie: cookie}]})
        .then((data) => {
          data.map((item) => login.previouslyViewed.push(item.id))
          cartList.find({cookie: cookie})
          .then((results) => {
            cb(data, results, login);
          })
        })
      }
      cartList.find({cookie: cookie})
      .then((results) => {
        cb(data, results, login);
      })
    })
    })
}

//login: {
//   name: '',
//   previouslyViewed: [],
//   showLoginScreen: false,
//   error: ''
// }

const newAccount = (creds, cookie, cb) => {
  usersList.find({username: creds.username})
  .then((data) => {
    if (data.length === 0){
      bcrypt.hash(creds.password, saltRounds, function(err, hash) {
        let newUser = new usersList({
          username: creds.username,
          sessionCookie: cookie,
          password: hash
        })
        newUser.save(() => cb('Logged In'))
      });
    } else {
      cb('username exists');
    }
  })
}

const login = (creds, cookie, cb) => {
  usersList.find({username: creds.username})
  .then((data) => {
    if (data.length === 0){
      cb('username does not exist');
      return;
    } else {
      bcrypt.compare(creds.password, data[0].password, function(err, res) {
        if (res) {
          usersList.update({username: creds.username}, {sessionCookie: cookie})
          .then(() => cb('Logged In'))
        } else {
          cb('Password incorrect')
        }
      });
    }
  })
}

const previousViews = (data, cookie, cb) => {
  if (!data.username){
    data.username = '';
  }
  let newView = new userViews({
    username: data.username,
    cookie: cookie,
    id: data.id
  })
  newView.save(() => cb('savedView'));
}

const getUserViews = (cookie, cb) => {
  usersList.find({sessionCookie: cookie})
  .then((data) => {
    if (data.length){
      if (data[0].username){
        userViews.find({$or:[{username:data[0].username}, {cookie: cookie}]})
        .then((data) => {
          cb(data);
        })
      } else {
        userViews.find({cookie: cookie})
        .then((data) => {
          cb(data);
        })
      }
    } else {
      userViews.find({cookie: cookie})
        .then((data) => {
          cb(data);
        })
    }
  })
}

module.exports = { getAll, addToCart, getAllandCart, newAccount, login, previousViews, getUserViews };
