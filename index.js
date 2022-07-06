const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+"/projeto1/html/index.html"))
    
    
})

router.get('/login',(req,res)=>{
    res.sendFile(path.join(`${__dirname}/form/formulario.html`))
})
app.get('/form/style.css', (req,res)=>{
    res.sendFile('/form/style.css')
})
app.use('/',router)
app.listen(process.env.port || 3000)

console.log("server rodando! na url http://localhost:3000")