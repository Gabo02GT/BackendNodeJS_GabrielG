const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 8000

app.get('/', (req, res) =>{
    res.send('Habilitado')
})
app.listen(port, () =>{
    console.log("Example app listening on port", 8000)
})