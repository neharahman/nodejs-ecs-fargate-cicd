const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello get request')
})
app.post('/home',(req,res)=>{
    res.send('hello home')
})

app.listen(9000,()=>{
    console.log('listen to the server')
})