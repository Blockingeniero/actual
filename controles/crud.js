const conexion = require('../database/db');

exports.save = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: 'No se recibieron datos en la solicitud',
    });
  }
  const { Sable, Nombre, Apellido } = req.body;
  if (!Sable || !Nombre || !Apellido) {
    return res.status(400).json({
      success: false,
      message: 'Los campos "sable", "nombre" y "apellido" son requeridos',
    });
  }
  conexion.query('INSERT INTO public.jinete ("Sable", "Nombre", "Apellido") VALUES ("$1", "$2", "$3")', [sable, Nombre, Apellido], (error, results) => {
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



