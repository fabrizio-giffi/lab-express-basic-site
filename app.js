const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/discography', (req, res) => {
    res.render('discography');
})

app.get('/photos', (req, res) => {
    res.render('photos');
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})