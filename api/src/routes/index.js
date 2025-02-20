const { Router } = require('express');
const { Dog } = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req,res)=>{
    res.send('Bienvenido a la Landing')
})

router.get('/dogs', async (req, res) => {

    const { api_key } = process.env
    const searchBreed = req.query.name
    const infoImages = await fetch(`https://api.thedogapi.com/v1/images/search?limit=100&api_key=${api_key}`)
        .then(data => data.json()).then((res) => {

            const allDataDogs = res.map((dataDog) => {
                if (dataDog.breeds.length > 0) {
                    return {
                        name: dataDog.breeds[0].name,
                        id: dataDog.breeds[0].id,
                        image: dataDog.url,
                        weight: dataDog.breeds[0].weight.metric,
                        height: dataDog.breeds[0].height.metric,
                        temperament: dataDog.breeds[0].temperament,
                    }
                }
            })
            return allDataDogs
        })
        .then(data => data.filter((obj) => obj !== undefined))
        .then((data) => {
            const ids = []
            let count = 0
            let newData = []
            while (count < data.length) {
                let element = data[count]
                let url = [element.image]
                if (!ids.includes(element.id)) {
                    const repeatDate = data.filter((obj) => obj.id === element.id)
                    if (repeatDate.length > 0) {
                        repeatDate.map((obj) => {
                            url.push(obj.image)
                        })
                        element.image = url
                        newData.push(element)
                        ids.push(element.id)
                    } else {
                        ids.push(element.id)
                        newData.push(element)
                    }
                }
                count = count + 1
            }
            
            return newData
        }).then((data) => res.status(200).send(data))
        .catch((error) => { console.error(error), res.send(error) })
})

router.get('/dogs/:id', async (req, res) => {

    const id = Number(req.params.id)
    const allInfoDogs = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json())
    const dogsApi = allInfoDogs.map((obj) => {

        const breed = {
            name: obj.name,
            id: obj.id,
            image: obj.reference_image_id,
            weight: obj.weight,
            height: obj.height,
            temperament: obj.temperament,
        }
        return (breed)
    })
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

    const allInfoDogs = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json())
    const dogsApi = allInfoDogs.map((obj) => {

        const breed = {
            name: obj.name,
            id: obj.id,
            image: obj.reference_image_id,
            weight: obj.weight,
            height: obj.height,
            temperament: obj.temperament,
        }
        return (breed)
    })
    const setTemperaments = dogsApi.map((bre) => bre.temperament)

    const joinTemperaments = setTemperaments.join(", ")

    const splitTemperaments = joinTemperaments.split(", ")

    const cleanTemperament = splitTemperaments.filter((temperament, index) => splitTemperaments.indexOf(temperament) === index)


    res.send(cleanTemperament)

})


router.post('/dogs', async (req, res) => {

    const { name, id, image, breed, temperament, height, weight } = req.body

    try {if (name.length > 0) {
        const dogsDb = await Dog.create({
            name,
            image,
            height,
            weight
        })
        res.status(201).json({
            message: 'Dog created successful',
            data: dogsDb
        })
    } else {
        res.send('enter a valid name ')
    }
} catch(error) {
    res.status(500).json({
        message: error.message,
    })
}
})

module.exports = router;