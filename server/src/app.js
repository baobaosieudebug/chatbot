const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

const data= require('./data/bot.json');
app.get('/:content', (req, res,next) => {
    const content = req.params.content;
	res.status(200).json(data.content[content]);
  })

app.listen(port);
