const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index', { title: "Homepage" });
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
})

app.get('/discography', (req, res) => {
    res.render('discography', { title: "Discography" });
})

app.get('/photos', (req, res) => {
    res.render('photos', { title: "Photo gallery" });
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})