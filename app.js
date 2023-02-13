const express = require('express')
const app = express()

//USANDO LOS MODELOS CREADOS CON SEQUELIZE
const modeloCategoria = require('./models').Categoria
const modeloProducto = require('./models').Producto

app.use(express.urlencoded({extendend:true}))
app.use(express.json())

//Alta de Categorias
app.post('/crearcategoria', (req, res)=>{
    modeloCategoria.create(req.body)
    .then((data)=>{
        res.json( {datos:data})
    })
    .catch((error)=>{
        res.json({error: error})
    })
})

app.listen(3000, ()=>{
    console.log('Server UP running in http://localhost:3000')
})