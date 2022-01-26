const con = require('./conexion');
const sql = require('mssql')

async function getenfermedades(){
    try{
        let conexion = await sql.connect(con)
        let query = await conexion.request().query('select * from cat_enfermedades')
        return query.recordsets
    }catch(error){
        console.log(error)
        throw new Error(`Error en la consulta ..... ${error.message}`)
    }
}

module.exports = {
    getenfermedades : getenfermedades
}