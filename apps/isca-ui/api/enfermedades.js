const con = require('./conexion');
const sql = require('mssql')

async function getenfermedades(){
    try{
        let conexion = await sql.connect(con)
        let query = await conexion.request().query('select * from cat_enfermedades order by id_enfermdad asc')
        return query.recordsets
    }catch(error){
        console.log(error)
        throw new Error(`Error en la consulta ..... ${error.message}`)
    }
}
async function getenfermedades2(fechas){
    try{
        let query = `select * from cat_enfermedades 
        where convert(date,fecha_ingreso)=CONVERT(date,'${fechas.fecha}')  
        order by id_enfermdad asc`
        let conexion = await sql.connect(con)
        let exec = await conexion.request().query(query)
        return exec.recordsets
    }catch(error){
        console.log(error)
        throw new Error(`Error en la consulta ..... ${error.message}`)
    }
}

module.exports = {
    getenfermedades : getenfermedades,
    nombre2: getenfermedades2
}