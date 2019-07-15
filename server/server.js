const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const path = require('path');
const db = require('./db')

const app = express();


// app.use(morgan('combined'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(parser.json());

app.listen(3050, ()=>console.log('listening on port 3050'));

app.get('/allItems', (req, res) => {
  db.getAll((data) => res.send(data))
})