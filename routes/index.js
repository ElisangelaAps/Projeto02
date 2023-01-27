const express = require('express'); 

const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        disciplinas: [
            {nome: 'Gestão Ágil de Projetos', dia: 'Segunda-Feira', horario: '07:40h às 11:20h'},
            {nome: 'Banco de Dados não relacional', dia: 'Terça-Feira',horario: '07:40h às 09:20h'},
            {nome: 'Inglês 1', dia: 'Terça-Feira', horario: '11:20h às 13:00h'},
            {nome: 'Desenvolvimento Web III', dia: 'Quarta-feira', horario: '07:40h às 09:20h'},
            {nome: 'Interação Humano Computador',dia: 'Quarta-feira',horario:'11:20h às 13:00h'},
            {nome: 'Álgebra Linear',dia: 'Quinta-feira',horario: '07:40h ás 11:20h'},
            {nome: 'Técnicas de Programação II',dia:'Sexta-Feira',horario: '07:40h às 11:20h'}
    ]};
    res.render('home', obj);

});

router.get('/pagina2', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('page_secundaria', obj);

});

router.get('/pagina3', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('page_terciaria', obj);

});

module.exports = router; 