function sumaNumeros(num1, num2){
    return num1 + num2;
}

function restaNumeros(num1, num2){
    return num1 - num2;
}

function buscaCaracter(cadena, valor){

    for(var idx in cadena){//idx trae la posicion actual en el ciclo

        if(cadena[idx] == valor)
        return true;
    }
    return false;
}
function buscaCaracterConOf(cadena, valor){

    for(var caracter of cadena){//caracter trae el valor en lugar de la posicion actual recorrida

        if(caracter === valor)
        return true;
    }
    return false;
}

function buscaCadena(cadena, valor){

    if(cadena.indexOf(valor) != -1)
        return true;

    return false;
}