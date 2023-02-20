const { Pool } = require('pg');

const poolPg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'PostgresCab',
    password: 'BlockIngeniero',
    port: 5432,
})

poolPg.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' +error);
        return
    }
    console.log('Conectado a la DB');
})


module.exports = poolPg


