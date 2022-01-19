
const verificadorService = require('../Service/VerificadorService');
var dnaMutante = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];

let respuesta;

respuesta = verificadorService.validateADN(dnaMutante);
console.log("El adn es :", respuesta);

