console.log('iniciando...')

const enfermedades = require('./enfermedades')
const express = require('express')
const bodyp = require('body-parser')
const cors = require('cors')
const { request } = require('http')

var app = express()
var router   =  express.Router()

app.use(bodyp.urlencoded({extended: true}));
app.use(bodyp.json());
app.use(cors());
app.use('/api',router)

router.route('/enfermedades').get((request,response)=>{
    enfermedades.getenfermedades().then(respuesta=>{
        return response.json(respuesta[0])
    }, (erro)=>{
        console.log(erro.message)
        return response.json(erro.message)
    })
})

var puerto = process.env.PORT || 3200;
app.listen(puerto)
console.log('api iniciada en el puerto ',puerto)


