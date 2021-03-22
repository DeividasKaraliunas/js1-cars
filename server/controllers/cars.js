const CarModel = require('../models/CarModel')

const getCars = async (req, res) => {
    try {
        const carsFromDB = await CarModel.find();
        res.status(200).json({ cars: carsFromDB })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const postCar = async (req, res) => {
    const { brand, model, year, engineVolume } = req.body;
    try {
        const newCar = await CarModel.create({ brand, model, year, engineVolume });
        res.status(200).json({
            car: {
                id: newCar._id,
                brand: newCar.brand,
                model: newCar.model,
                year: newCar.year,
                engineVolume: newCar.engineVolume
            }
        })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const deleteCar = async (req, res) => {
    res.send('Ateityje istrinsiu viena masina');
}

const updataCar = async (req, res) => {
    res.send('Ateityje atnaujinsiu viena masina');
}

module.exports = {
    getCars,
    postCar,
    deleteCar,
    updataCar
}