const conexion = require('../database/db');


exports.savej = (req, res) => {
  const {sable, nombre, apellido} = req.body;
  if (!sable || !nombre || !apellido) {
    return res.status(400).json({
      success: false,
      message: 'Los campos "sable", "nombre" y "apellido" son requeridos',
    });
  }
  conexion.query('INSERT INTO jinete ("sable", "nombre", "apellido") VALUES ($1, $2, $3)', [sable, nombre, apellido], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Ocurrió un error al intentar insertar en la base de datos',
        error: error.message,
      });
    } else {
      res.redirect('/views/jinete.ejs');
    }
  });
};

exports.savec = (req, res) => {
  const {codigo_caballo, nombre, codigo_ueln, microchip, raza, nacimiento, sexo, capa, alzada} = req.body;
  if (!codigo_caballo || !nombre || !codigo_ueln || !microchip || !raza || !nacimiento || !sexo || !capa || !alzada) {
    return res.status(400).json({
      success: false,
      message: 'Los campos son requeridos',
    });
  }
  conexion.query('INSERT INTO caballo ("codigo_caballo", "nombre", "codigo_ueln", "microchip", "raza", "nacimiento", "sexo", "capa", "alzada") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
   [codigo_caballo, nombre, codigo_ueln, microchip, raza, nacimiento, sexo, capa, alzada], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Ocurrió un error al intentar insertar en la base de datos',
        error: error.message,
      });
    } else {
      res.redirect('/views/caballos.ejs');
    }
  });
};


