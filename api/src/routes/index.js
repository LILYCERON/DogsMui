const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async (req, res) => {

    const breed = req.query.name

    const dogsApi = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json())

    if (breed === undefined) {
        res.send(dogsApi)

    } else if (breed !== "") {

        const breedSearched = dogsApi.filter((bre) => bre.name.toLocaleLowerCase().includes(breed.toLocaleLowerCase()))

        if (breedSearched.length > 0) {
            res.send(breedSearched)
        } else {
            res.send(`there is not result for the breed ${breed}`)
        }
    } else {
        res.send('enter a breed of your interest')
    }
})

router.get('/dogs/:id', async (req, res) => {

    const id = Number(req.params.id)
    const dogsApi = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json())

    if (Number(id) && id !== undefined) {
        const breedIs = dogsApi.filter((bre) => bre.id === id)
        if (Object.keys(breedIs).length >= 1) {
            res.send(breedIs)
        } else {
            res.send(`There is not a breed whit id: ${id}`)
        }
    } else {
        res.send(`checkes that the data entered is a number `)
    }
})

router.get('/temperaments', async (req, res) => {

    const dogsApi = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json())

    const setTemperaments = dogsApi.map((bre) => bre.temperament)

    const joinTemperaments = setTemperaments.join(", ")

    const splitTemperaments = joinTemperaments.split(", ")

    const cleanTemperament = splitTemperaments.filter((temperament, index) => splitTemperaments.indexOf(temperament) === index)


    res.send(cleanTemperament)

})

router.post('/dogs', (req, res) => {

    const { name, id, image, breed, temperament, height, weight } = req.body

    if (name.length > 0) {

        res.send(name, image, temperament)
    } else {
        res.send('enter a valid name ')
    }

})

module.exports = router;