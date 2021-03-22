const CarModel = require('../models/CarModel')

const getCars = async(req, res) => {
    try {const carsFromDB = await CarModel.find();
    res.status(200).json({carsFromDB})
}
catch(error) {
    res.status(404).json({message:error.message})
}
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