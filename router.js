const express = require('express')
const router = express()
const bodyParser = require('body-parser')

const conexion = require('./database/db')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// // Obtener todas las estrellas
// const stars = document.querySelectorAll('.bx-star');

// // Para cada estrella, agregar un evento click
// stars.forEach((star, index) => {
//   star.addEventListener('click', () => {
//     // Cambiar el color de las estrellas seleccionadas
//     for (let i = 0; i <= index; i++) {
//       stars[i].classList.add('active');
//     }
//     for (let i = index + 1; i < stars.length; i++) {
//       stars[i].classList.remove('active');
//     }
//   });
// });


// const router = express();

router.set("view engine", "ejs");
router.use(express.static(__dirname + "/public"));

var results = [1, 2, 3];
// let results = [1, 2, 3];

router.get("/", (req, res) => {
    res.render("index", { results });
  });

router.get('/views/informacion.ejs', (req, res)=> {

    conexion.query('SELECT * FROM informacion order by id_informacion asc', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('informacion.ejs', {results:results.rows});
        }        
    })
})
router.get('/views/caballos.ejs', (req, res)=> {

    conexion.query('SELECT * FROM Caballo', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('caballos.ejs', {results:results.rows});
        }        
    })
})
router.get('/views/patrulla.ejs', (req, res)=> {

    conexion.query('SELECT * FROM patrulla', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('patrulla.ejs', {results:results.rows});
        }        
    })
})

router.get('/edit/:id', (req, res)=> {
    const id = req.params.id;
    console.log("Hemos entrado por el router y con id: " + id);
    conexion.query('SELECT * FROM informacion WHERE id_informacion =$1', [id], (error, results)=> {
        if(error){
            console.log("Entramos en el error :" + error);
            // throw error;
        }else{
            console.log("La consulta fue bien:" + results.rowCount);
            const resultado = results.rows;
            for(let i=0; i<resultado.length; i++){
                console.log(resultado[i]);
            }
            res.render('edit.ejs', {curinformacion:resultado[0]});
        }     
    })
}) 

const crud = require('./controles/crud')
router.post('/savej', crud.savej)
router.post('/savec', crud.savec)
router.post('/savep', crud.savep)
router.post('/updatej', crud.updatej)



const port = process.env.PORT || 3000;
router.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = router;
 