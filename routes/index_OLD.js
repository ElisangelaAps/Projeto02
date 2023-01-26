const express = require('express'); //exportação express

const router = express.Router();

router.get('/posts/:slug', (req, res) => {  
    let slug = req.params.slug;
    res.send('SLUG do post: ' + slug);
});

router.get('/rota1', (req, res) => {  
    res.send("Essa é a pagina 1 ...");
});

router.get('/rota2', (req, res) => {  
    res.json(req.query);
});

module.exports = router; 