const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(cors())
app.use(express.static('build'))
const axios = require('axios');

app.get('/get/:item', (req, res) => {
  console.log(req.params.item);
  const API = `https://bad-api-assignment.reaktor.com/v2/products/${req.params.item}`;
  axios(API)
    .then(response => {
      res.json(response.data)
    }).catch(err => {
      res.send('errr!!!')
    })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))