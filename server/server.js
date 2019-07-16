const express = require('express');
const cookieParser = require('cookie-parser');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const crypto = require("crypto");

const app = express();

app.use(cookieParser())
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(parser.json());

app.listen(3050, ()=>console.log('listening on port 3050'));

app.get('/allItems', (req, res) => {
  if (Object.keys(req.cookies).length){
    if (Object.keys(req.cookies.HomeDepotCookie)){
      db.getAllandCart(req.cookies.HomeDepotCookie, (data, cart) => {
        res.send({data: data, cart: cart})
      })}else {
        db.getAll((data) => res.cookie('HomeDepotCookie', crypto.randomBytes(20).toString('hex')).send({data: data}))}
	} else {
      db.getAll((data) => res.cookie('HomeDepotCookie', crypto.randomBytes(20).toString('hex')).send({data: data}))
    }
});

app.post('/addToCart', (req, res) => {
  db.addToCart({item: req.body.tempCart, cookie: req.cookies.HomeDepotCookie}, (response)=> {
    res.send(req.cookies)
  })
})

app.get('/checkout', (req, res) => {
  res.cookie('HomeDepotCookie', req.cookies.HomeDepotCookie, {maxAge: 0});
	res.send('purchase finished and cookies cleared');
});