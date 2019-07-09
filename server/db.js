const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homedepot');

let itemSchema = mongoose.Schema({
  id: String,
  name: String,
  price: Number
});


let itemList = mongoose.model('Items', itemSchema);

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
