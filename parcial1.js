const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/


function puntoUno(estudiantes){
    let contador = 0
    for( let i=0; i<estudiantes.length; i++){
        let sum=0
        for(let j=0; j<estudiantes[i].cursos.length ;j++){
            sum+= estudiantes[i].cursos[j].nota
            }
             if(sum/estudiantes[i].cursos.length< 3.3){
                contador++
        }
    }
    return contador
}

function puntoDos(estudiantes){
    let miLista = [];
    for(let i=0; i<estudiantes.length;i++){
       miLista.push(estudiantes[i].nombre +" "+ estudiantes[i].apellido)
    }
    return miLista
}

function puntoTres(estudiantes) {
  let eOrdenados = puntoSiete(estudiantes, "altura");
  return eOrdenados.map(estudiante => estudiante["_id"]);
}

function puntoCuatro(numeros) {
  let sum=0
  for(let i=0; i<numeros.length; i++){
    sum+=numeros[i]
  }
  let promedio = sum/numeros.length
  return promedio;
}

function puntoCinco(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
return true;
}
 
function puntoSeis(cad) {
    var nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}

function puntoSiete(lista,campo) {
  for (let i=0; i<lista.length - 1; i++) {
    for (let j = 0; j < lista.length - i - 1; j++) {
      if (lista[j][campo] > lista[j + 1][campo]) {
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
  return lista;
}