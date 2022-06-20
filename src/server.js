const express = require('express')

const app = express();


app.get("/", (Require, Request)=>{
    return Request.json({message: "Ola mundo"})
})


app.listen(3031, ()=>{
    console.log("Servidor Rodando")
})