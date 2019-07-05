const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static('../dist'));
app.use(parser.json());
app.use(cors());

app.listen(3000, ()=>console.log('listening on port 3000'));