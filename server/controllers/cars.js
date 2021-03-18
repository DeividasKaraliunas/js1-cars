


const getCars = (req, res) => {
    res.status(200).json('Ateityje grazinsiu masinas')
}

const postCar = (req, res) => {
    res.send('Ateityje idesiu viena masina');
}

const deleteCar = (req, res) => {
    res.send('Ateityje istrinsiu viena masina');
}

const updataCar = (req, res) => {
    res.send('Ateityje atnaujinsiu viena masina');
}

module.exports = {
    getCars,
    postCar,
    deleteCar,
    updataCar
}