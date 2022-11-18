const express = require("express")
const cors = require("cors")

const {dbConnection} = require("../database/config")

class Server{
    constructor(){
        this.app= express()
        this.port = process.env.PORT

        this.encuestasPath ="/api/encuestas"

        this.middlewares()
        this.conectarDB()
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.encuestasPath, require("../routes/encuestas"))
    }

    listen(){
        this.app.listen(this.port, (req, res)=>{
            console.log(`escuchando por el puerto ${this.port}`)
        }) 

    }
}
module.exports=Server