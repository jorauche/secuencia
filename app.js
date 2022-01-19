var express = require('express');
const bodyParser = require('body-parser');
var verificadorService = require('./Service/VerificadorService.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/mutation', function(req, res){
   try {
      const mensaje= req.body.dna;
      console.log("Request ",mensaje);
      let respuesta = verificadorService.validateADN(req.body.dna);
      console.log("Respuesta", respuesta);
      respuesta = false;
      if(respuesta == true){
         res.status(200).jsonp(respuesta);
      }else{
         res.status(403).jsonp(respuesta);
      }
      
   } catch (error) {
      res.send(400).jsonp("No es mutante");
   }
 
});

// A continuación, podemos usar app. Verb () para definir la ruta.
 // Por ejemplo, use "GET /" en respuesta a la cadena "Hello World", porque res y req son objetos precisos proporcionados por Node, por lo que puede llamar a res.pipe ()
 // O req.on ('datos', devolución de llamada) u otro.
app.get('/Getmutation', function(req, res){

   var body = 'Hello World';
   console.log('entro al test');
   req.setHeader('Content-Type', 'text/plain');
   //req.setHeader('Content-Length', body.length);
   console.log("Request ",req.query.dna);
   let respuesta = verificadorService.validateADN(req.query.dna);
   res.end(respuesta);
});

app.listen(8082);
console.log('Listening on port 8082');
