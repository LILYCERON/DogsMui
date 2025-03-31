const { Temperament } = require('../db.js')

const getTemperament = async (req, res) => {

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

}

module.exports = {
    getTemperament
}
