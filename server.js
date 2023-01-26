const app = require('./app');
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});
/*
//conexão banco de dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology:true});        //string de conexão como parametro
mongoose.Promise = global.Promise;              //liberando funcionalidade com o mongoose  
mongoose.connection.on('error', (error) => {    //log erro
    console.error("ERROR: "+error.message);
});
*/
//conexão web service
app.set('port',process.env.PORT || 7777);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor Rodando na Porta: "+server.address().port);
});  


