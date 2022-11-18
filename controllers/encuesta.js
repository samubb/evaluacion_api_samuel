const Encuesta = require("../models/encuesta")

const getEncuesta = async (req, res) =>{
    const encuestas = await Encuesta.find()
    res.json({
        msg: "Encuesta GET API",
        encuestas
    })
}
// const getPromedio= async (req, res) =>{
//     const encuestas = await Encuesta.find()
//     res.json({
//         msg: "Encuesta promedio GET API",
//         encuestas
//     })
// }

//otro get que traiga el promedio

const postEncuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body 

    const encuesta1 = new Encuesta ({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuesta1.save()

    res.json({
        msg:"Encuesta POST API",
        encuesta1
    })
}

const putEncuesta = async(req, res)=>{
    const { documentoEncuestado, nombreEncuesta, fecha, nombreEncuestado, edad, genero, empleado}= req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({documentoEncuestado : documentoEncuestado }, {nombreEncuesta: nombreEncuesta, fecha : fecha, nombreEncuestado : nombreEncuestado, edad : edad, genero:genero, empleado:empleado})

    res.json({
        msg:"Encuesta PUT API",
        encuesta1
    })
}

const patchEncuesta = async(req, res)=>{
    const {documentoEncuestado, nombreEncuestado}= req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({documentoEncuestado : documentoEncuestado}, {nombreEncuestado : nombreEncuestado})

    res.json({
        msg:"Encuesta PATCH API",
        encuesta1
    })
}

const deleteEncuesta = async (req, res)=>{
    const { documentoEncuestado } = req.query //y el query solo actua con el parametro propio

    const encuesta1= await Encuesta.findOneAndDelete ({documentoEncuestado: documentoEncuestado})

    res.json({
        msg:"Encuesta DELETE API",
        encuesta1
    })
}



module.exports={
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta,
    // getPromedio

}