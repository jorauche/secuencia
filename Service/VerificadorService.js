
const validaCadena = require('../Service/ValidaCadena.js');
const baseNitrogeno = require('../Service/BaseNitrogeno.js');
const nxnVerificador = require('../Service/Verificador.js');
module.exports.validateADN = (adnArray)=>{

  //Implemento el patron strategy para validar el array de ADN.
  let validArray = [validaCadena, baseNitrogeno, nxnVerificador];

  return validArray.every((validadorFinal) => new validadorFinal(adnArray).validate());

}