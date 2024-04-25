const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/krishna', function(req,res){
  res.send('Krishna is Great')

})

app.get('/make', function(req,res){

  var idli = {
    size : '12cm',
    weight : '30Gm',
  }
  res.send(idli)

})

app.listen(3000,()=>{
  console.log("Server is Started")
})