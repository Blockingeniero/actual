const { Pool } = require('pg');

const poolPg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456789',
    port: 5455,
})

poolPg.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' +error);
        return
    }
    console.log('Conectado a la DB');
})


module.exports = poolPg


