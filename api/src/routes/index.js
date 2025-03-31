const { Router } = require('express');
const { getAllDogs, getDogByID, createDog } = require('../controllers/dogController.js');
const { getTemperament } = require('../controllers/temperamentController.js');
const { createUser } = require('../controllers/userControllers.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.send('Bienvenido a la Landing')
})

router.get('/dogs', getAllDogs)

router.get('/dogs/:id', getDogByID)

router.get('/temperaments', getTemperament)

router.post('/dogs', createDog)


module.exports = router;