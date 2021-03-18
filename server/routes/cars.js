const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Ateityje grazinsiu masinas');
});

router.post('/', (req, res) => {
    res.send('Ateityje idesiu viena masina');
});

router.delete('/:id', (req, res) => {
    res.send('Ateityje istrinsiu viena masina');
});

router.patch('/:id', (req, res) => {
    res.send('Ateityje atnaujinsiu viena masina');
});

module.exports = router;