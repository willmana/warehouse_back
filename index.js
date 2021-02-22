const express = require('express')
const app = express()
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
      console.log(err);
      res.send('errr!!!')
    })
})

//Catch-all router
app.get('/*', (req, res) => {
  res.redirect('/')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))