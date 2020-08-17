//Function esNumero comprueva si el valor del input es un número y devuelve TRUE o FALSE
function esNumero (numA, numB) {
    if (isNaN(numA) || isNaN( numB) || numA==="" || numB==="")
    {
        return false
    } else {
        return true;
    }
}

var suma = (a,b) => parseFloat(a) + parseFloat(b); // Función suma dos números y los fuerz como números FLOAT

var resta = (a,b) => a-b; ////Función resta de dos numeros devolviendo su valor

var multiplicacion = (a,b)=> a*b; ////Función multiplicación de dos numeros devolviendo su valor

var division = (a,b)=> parseFloat(a) / parseFloat(b);  //Función division de dos numeros devolviendo su valor


//Function botonsuma es llamada al pulsar el botón +
 function botonsuma () {
    var a = document.getElementById ("Number1").value; // captura el valor del input Number1
    var b = document.getElementById ("Number2").value; // captura el valor del input Number2
    if (esNumero (a,b)) {  //llamando a la función que comprueba si es un número válido si es true o false
        document.getElementById ("resultado").innerText = ("El resultado= " +  suma (a,b)); // Si es true llama a la función que suma los dos valores y los muestra
    } else {  
        alert ("Debe ser un número"); // en el caso de que la función es número sea FALSE, es decir no se un número válido muestra un mensaje
    }
    
 }

 //Function botonsuma es llamada al pulsar el botón -
 function botonresta () {
    var a = document.getElementById ("Number1").value; // captura el valor del input Number1
    var b = document.getElementById ("Number2").value; // captura el valor del input Number2
    if (esNumero (a,b)) {   //llamando a la función que comprueba si es un número válido si es true o false
        document.getElementById ("resultado").innerText = ("El resultado= " + resta (a,b)); // Si es true llama a la función que resta los dos valores y los muestra
    } else {
        alert ("Debe ser un número"); // en el caso de que la función es número sea FALSE, es decir no se un número válido muestra un mensaje
    }
 }

 //Function botonsuma es llamada al pulsar el botón *
 function botonmulti () {
    var a = document.getElementById ("Number1").value; // captura el valor del input Number1
    var b = document.getElementById ("Number2").value; // captura el valor del input Number2
    if (esNumero (a,b)) {   //llamando a la función que comprueba si es un número válido si es true o false
        document.getElementById ("resultado").innerText =( "El resultado= " + multiplicacion (a,b)); // Si es true llama a la función que multiplicacion los dos valores y los muestra
    } else {
        alert ("Debe ser un número"); // en el caso de que la función es número sea FALSE, es decir no se un número válido muestra un mensaje
    }
 }

//Function botonsuma es llamada al pulsar el botón /
 function botondiv () {
    var a = document.getElementById ("Number1").value; // captura el valor del input Number1
    var b = document.getElementById ("Number2").value; // captura el valor del input Number2
    if (esNumero (a,b)) {  //llamando a la función que comprueba si es un número válido si es true o false
        document.getElementById ("resultado").innerText =("El resultado= " + division (a,b)); // Si es true llama a la función que division los dos valores y los muestra
    } else {
        alert ("Debe ser un número"); // en el caso de que la función es número sea FALSE, es decir no se un número válido muestra un mensaje
    }
 }


document.getElementById ("Suma").addEventListener ("click", botonsuma);

document.getElementById ("Resta").addEventListener ("click", botonresta);

document.getElementById ("Multiplicacion").addEventListener ("click", botonmulti);

document.getElementById ("Division").addEventListener ("click", botondiv);

