const conexion = require('../database/db');



exports.savej = (req, res) => {
  const {empresa, sector, url, explicacion} = req.body;
  if (!empresa || !sector || !url || !explicacion) {
    return res.status(400).json({
      success: false,
      message: 'Los campos "empresa", "sector" y "url" son requeridos',
    });
  }
  conexion.query('INSERT INTO informacion ("empresa", "sector", "url", "explicacion") VALUES ($1, $2, $3, $4)', [empresa, sector, url, explicacion], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Ocurrió un error al intentar insertar en la base de datos',
        error: error.message,
      });
    } else {
      res.redirect('/views/informacion.ejs');
    }
  });
};

exports.updatej = (req, res) => {
  const {empresa, sector, url, id_informacion} = req.body;
  if (!empresa || !sector || !url) {
    return res.status(400).json({
      success: false,
      message: 'Los campos "empresa", "sector" y "url" son requeridos',
    });
  }
  conexion.query('UPDATE informacion SET empresa=$1, sector=$2, url=$3 WHERE id_informacion=$4', [empresa, sector, url, id_informacion], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Ocurrió un error al intentar insertar en la base de datos',
        error: error.message,
      });
    } else {
      res.redirect('/views/informacion.ejs');
    }
  });
};


exports.savec = (req, res) => {
  const {codigo_caballo, sector, codigo_ueln, microchip, raza, nacimiento, sexo, capa, alzada} = req.body;
  if (!codigo_caballo || !sector || !codigo_ueln || !microchip || !raza || !nacimiento || !sexo || !capa || !alzada) {
    return res.status(400).json({
      success: false,
      message: 'Los campos de caballos son requeridos',
    });
  }
  conexion.query('INSERT INTO caballo ("codigo_caballo", "sector", "codigo_ueln", "microchip", "raza", "nacimiento", "sexo", "capa", "alzada") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
   [codigo_caballo, sector, codigo_ueln, microchip, raza, nacimiento, sexo, capa, alzada], (error, results) => {
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

exports.savep = (req, res) => {
  const {caballo, informacion, turno} = req.body;
  if (!caballo || !informacion || !turno) {
    return res.status(400).json({
      success: false,
      message: 'Los campos de turno son requeridos',
    });
  }
  conexion.query('INSERT INTO patrulla ("caballo", "informacion", "turno" ) VALUES ($1, $2, $3)', [caballo, informacion, turno], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Ocurrió un error al intentar insertar en la base de datos',
        error: error.message,
      });
    } else {
      res.redirect('/views/patrulla.ejs');
    }
  });
};


