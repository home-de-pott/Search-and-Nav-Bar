const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Michael:mongodepot@cluster0-ibbip.mongodb.net/homedepot?retryWrites=true&w=majority');

let itemSchema = mongoose.Schema({
  id: String,
  name: String,
  price: Number
});


let itemList = mongoose.model('ItemList', itemSchema);

let save = () => {
  allItems.map((newItem)=>{
    let item = new itemList(newItem);
    item.save(() => {
      console.log('item saved to database');
    })
  })
}

let getAll = (cb) => {
  itemList.find()
  .then((data) => cb(data))
}

module.exports = { getAll };
