
function resuelve(intx, inty) {
  //Coordenadas

  if (paso(x, y)) {
    //Intentara resolver en estas coordenadas
    laberinto[x][y] = "s"; //Introduce la etrada en (x,y)
  }
}

paso(intx, inty);
{
  if (laberinto[x][y] == "f") {
    //Si llegamos a f quiere decir que encontramos la solución.
    return true; //llego al laberinto y termina.
  }

  if (laberinto[x][y] == "1" || laberinto[x][y] == "*") {
    //Si llegamos a una pared o al mismo punto
    return false; //entonces el laberinto no puede resolver y terminar
  }

  /*
   *Si no se cumple ninguna de estás situaciones quiere decir que nos encontramos en un punto que no se
   *puede recorrer o no hemos llegado al final.
   */

  laberinto[x][y] = "*"; //Marcara la opción como visitada
  resultado; //se coloca una S de salida

  resultado = paso(x - 1, y); //intentamos ir hacia arriba
  if (resultado) return true; //Si el ersultado es el final, entonces el algoritmo termina

  resultado = paso(x, y + 1); //intentamos ir hacia la derecha
  if (resultado) return true; //Si el ersultado es el final, entonces el algoritmo termina

  resultado = paso(x, y - 1); //intentamos ir hacia la izquierda
  if (resultado) return true; //Si el ersultado es el final, entonces el algoritmo termina

  resultado = paso(x + 1, y); //intentamos ir hacia la izquierda
  if (resultado) return true; //Si el ersultado es el final, entonces el algoritmo termina.
  //Si no hemos encontrado la solución en estos 4 movimientos volvemos atrás.
  //Si en ninguna de ellas ha conseguido el f (final), el algoritmo resuelve como

  laberinto[x][y] = "-"; //en el caso de no ser el resultado se marca con un - (ya fue pisado)
  if (resultado) return false;
}
