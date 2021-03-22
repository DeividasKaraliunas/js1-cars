const CarModel = require('../models/CarModel')
const mongoose = require('mongoose')

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
    const { id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Neteisingas id ${id} formatas`)
        const deletedCar = await CarModel.findByIdAndDelete(id)
        if (deletedCar === null)
            throw new Error(`Could'nt find and delete car with id '${id}'`)
        res.status(200).json({
            car: {
                id: deletedCar._id,
                brand: deletedCar.brand,
                model: deletedCar.model,
                year: deletedCar.year,
                engineVolume: deletedCar.engineVolume
            }
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
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