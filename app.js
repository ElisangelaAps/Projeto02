//app aplicação principal

//fazendo a importação do Express
const express = require("express");

//rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/', (req, res) => {   //primeira rota //fução anonima //dois parametros
    res.send("Esta  funcionandooo...");
});
//configuraçõa basica do aplicativo
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1 rota

module.exports = app; //exportamos o app, pois vamos importa-lo no servidor

