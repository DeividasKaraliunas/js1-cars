const CarModel = require('../models/CarModel')

const getCars = async(req, res) => {
    const cars = await CarModel.find();
    res.status(200).json('Ateityje grazinsiu masinas')
}

const postCar = async(req, res) => {
    res.send('Ateityje idesiu viena masina');
}

const deleteCar = async(req, res) => {
    res.send('Ateityje istrinsiu viena masina');
}

const updataCar = async(req, res) => {
    res.send('Ateityje atnaujinsiu viena masina');
}

module.exports = {
    getCars,
    postCar,
    deleteCar,
    updataCar
}