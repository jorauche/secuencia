
module.exports.pasarArrayToMatriz = (adnArray)=>{

 let finalMatriz = [];

 adnArray.forEach((adn)=>{

    let temporalArray = [];

    for(let i=0;i<=adn.length-1;i++)
       temporalArray.push(adn[i]);

    finalMatriz.push(tmpArray);

 });

 return finalMtx;

}

module.exports.obtenerColumna = (matriz,nColumna)=>{

  let grupos = [];

  //Extraigo la columna entera.
  for (let i =0;i<=matriz.length-1;i++)
      grupos.push(matriz[i][nColumna]);

  return grupos;

}


module.exports.obtenerFilas = (matriz,nFilas)=>{

  let grupos = [];

  //Extraigo la fila entera.
  for (let i =0;i<=matriz.length-1;i++)
    grupos.push(matriz[nFilas][i]);

  return grupos;

}

//Extraigo las diagonal de la mitad superior en base al n° de columna.
module.exports.obtenerDiagSuperiorCol = (matriz,nCol)=>{

  let line = [];

  for (let i=0;i<=matriz.length-nCol-1;i++)
    line.push(matriz[i][i+nCol]);

  return line;

}

//Extraigo la diagonal de la mitad inferior en base al n° de fila.
module.exports.extraerDiagInfFila = (matriz,nRow)=>{

  let line = [];

  for (let i=0;i<=matriz.length-nRow-1;i++)
      line.push(matriz[i+nRow][i]);

  return line;

}

const extraerDiags = (matriz) => {

  let tiras = [];

  //Traigo la diagonal superior.
  matriz.forEach((col,i) => tiras.push(this.obtenerDiagSuperiorCol(matriz,i)) );
  
  //Traigo la diagonal inferior.
  matriz.forEach((row,i)=>{ 

    if (i>0)
      tiras.push(this.extraerDiagInfFila(matriz,i)); 

  });

  return tiras;

}


const extraerCols = (matriz)=>{

  return matriz.map((col,i) => this.obtenerColumna(matriz,i) );

}



const extraerFilas = (matriz)=>{

  return matriz.map((col,i) => this.obtenerFilas(matriz,i) );

}

//Recorre buscando secuencias consecutivas con una cantidad mayor o igual a tope.
const validaConsecutivos = (lineaArray,tope) => {

  let last   = '';
  let actual = '';
  let count  = 0;

  for (let i=0;i<=lineaArray.length-1;i++){
          
      last   = (i==0)?lineaArray[0]:lineaArray[i-1];
      actual = lineaArray[i];
      
      if (last==actual){
          count++;
                      
        if (count==tope)
          return true;
          
      }
      
  }

  return false;

}

//Dice si es una matriz es mutante o no.
module.exports.isMutante = (matriz)=>{

    //Traigo las diagonales.
    let diags = this.extraerDiags(matriz);

    //Traigo las columnas.
    let cols  = this.extraerCols(matriz);

    //Traigo las filas.
    let rows  = this.extraerFilas(matriz);

    //Filtro las filas que son consecutivas.
    return ( [...diags,...cols,...rows].find((line) =>  this.validaConsecutivos(line,4)).length > 0);
}