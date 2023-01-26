const app = require('./app');
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});

app.set('port',process.env.PORT || 7777);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor Rodando na Porta: "+server.address().port);
});  


