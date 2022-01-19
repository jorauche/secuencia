
const basesNitrogenadas = require('../Constantes/Constantes.js').adnPermitidos;

module.exports = class nitrogenoBaseVerificador{

    constructor(matrix){
  
      this.matrix = matrix;
  
    }
  
    validarSimbolos(adnStr){
  
      for (let i=0;i<=adnStr.length-1;i++)
        if (!basesNitrogenadas.includes(adnStr[i]))
          return false;
  
      return true;
  
    }
  
    validate(){
  
      //Armo un array con los resultados de validar cada adn.
      let resu = this.matrix.map((adn) => this.validarSimbolos(adn));
  
      //Reviso que todas las cadenas cumplan.
      return resu.every((stat) => stat==true);
  
    }
  
  }