const mutation = require('../Utils/Utileria.js');


class mutant{

    //Dice si el array de adn es mutante o no.
    isMutant(adnArray){

      //Transformo el de array de strings a una matriz.
      let adnMatriz = mutation.pasarArrayToMatriz(adnArray);

      //Reviso si es mutante o no.
      return mutation.isMutante(adnMatriz);

    }

}

module.exports = new mutant();