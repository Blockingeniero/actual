const express = require('express')
const router = express()
const bodyParser = require('body-parser')

const conexion = require('./database/db')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// const router = express();

router.set("view engine", "ejs");
router.use(express.static(__dirname + "/public"));

var results = [1, 2, 3];
// let results = [1, 2, 3];

router.get("/", (req, res) => {
    res.render("index", { results });
  });

router.get('/views/jinete.ejs', (req, res)=> {

    conexion.query('SELECT * FROM Jinete', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('jinete.ejs', {results:results.rows});
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

// router.get('/createj', (req, res)=> {
//     res.render('createj')
// }) 
// router.get('/createc', (req, res)=> {
//     res.render('createc')
// }) 

const crud = require('./controles/crud')
router.post('/savej', crud.savej)
router.post('/savec', crud.savec)
router.post('/savep', crud.savep)


const port = process.env.PORT || 3000;
router.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = router;
 