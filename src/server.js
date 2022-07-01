const express = require('express')

const app = express();

app.use(express.json())

    app.get('/Cursos', (Request, Response)=>{
        const {query}=Request.query;
        console.log(query)
        return Response.json([
            "Curso0",
            "Curso2"
        ])
    })

    app.post('/Curso', (Request, Response)=>{
        const {name, idade}=Request.body;
        console.log("Ola "+name," Tens"+ idade+" Anos de idade?")
        return Response.json([
            "Curso0",
            "Curso1",
            "Curso2"
        ])
    })
    app.put('/Cursos/:id', (Request, Response)=>{
        const {id}=Request.params;
        console.log(id)
        return Response.json([
            "Curso1",
            "Curso1",
            "Curso2"
        ])
    })
    app.delete('/Cursos/:id', (Request, Response)=>{
        return Response.json([
            "Curso0",
            "Curso1"
        ])
    })

app.listen(3031, ()=>{
    console.log("Servidor Rodando")
})