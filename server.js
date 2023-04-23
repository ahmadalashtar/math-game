const express = require('express')
const app = express()
const port = 3000

app.use(express.static('scripts'))

app.use(express.static('styles'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game', (req,res)=>{
    res.render('game')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})