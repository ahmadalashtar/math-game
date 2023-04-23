const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(expressLayouts)

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set ('views','views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game', (req,res)=>{
    res.render('game')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})