const express = require('express'); //exportação express

const router = express.Router();
router.get('/', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('home', obj);

});

module.exports = router; 