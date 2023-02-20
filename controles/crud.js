const conexion = require('../database/db');


exports.save = (req, res) => {
  const {Sable, Nombre, Apellido} = req.body;
  if (!Sable || !Nombre || !Apellido) {
    return res.status(400).json({
      success: false,
      message: 'Los campos "sable", "nombre" y "apellido" son requeridos',
    });
  }
  conexion.query('INSERT INTO jinete ("Sable", "Nombre", "Apellido") VALUES ($1, $2, $3)', [Sable, Nombre, Apellido], (error, results) => {
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

// exports.save = (req, res) => {
//   const {id, codigo_caballo, nombre, codigo_ueln, microchip, raza, nacimiento, sexo, capa, alazada} = req.body;
//   if (!id || !codigo_caballo || !nombre || !codigo_ueln || !microchip || !raza || !nacimiento || !sexo || !capa || !alazada) {
//     return res.status(400).json({
//       success: false,
//       message: 'Los campos "sable", "nombre" y "apellido" son requeridos',
//     });
//   }
//   conexion.query('INSERT INTO jinete ("id", "Sable", "Nombre", "Apellido") VALUES ($1, $2, $3, $4)', [id, Sable, Nombre, Apellido], (error, results) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).json({
//         success: false,
//         message: 'Ocurrió un error al intentar insertar en la base de datos',
//         error: error.message,
//       });
//     } else {
//       res.redirect('/views/jinete.ejs');
//     }
//   });
// };


