const { Router } = require('express');
const {
    getCars,
    postCar,
    deleteCar,
    updataCar
} =require('../controllers/cars')


const router = Router();

router.get('/', getCars);

router.post('/', postCar);

router.delete('/:id', deleteCar);

router.patch('/:id', updataCar);

module.exports = router;