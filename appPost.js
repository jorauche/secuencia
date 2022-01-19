var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 // Procesando solicitud POST
 // nombre y correo electrónico son los nombres de los parámetros en el campo de solicitud POST
app.post('/hello', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.email);
    res.send('Post Over');
});

post_mtd = function(req,res){
     res.send ('Soy Wujintao');
}
 // La función en estas dos formas se puede definir externamente, y luego se puede introducir el nombre del método. El método post_mtd debe definirse antes de hacer referencia a él.
app.post("/wujintao",post_mtd);

 // Además de la forma de app.get y app.post, también puedes usar: app.all donde all significa cualquier método de solicitud como get, post, etc., por supuesto, también se puede especificar como un método de solicitud específico.
 // O app ['get'] ('/ path', function (req, res)); esta forma.

 // Ahora puede enlazar y escuchar el puerto, llamar al método app.listen () y recibir los mismos parámetros, como:
app.listen(8083);
console.log('Listening on port 8083');
