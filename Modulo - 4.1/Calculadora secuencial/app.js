//Function esNumero comprueva si el valor del input es un número y devuelve TRUE o FALSE si no es un número limpia el input
function esNumero (numA) {
    if (isNaN(numA) || numA==="")
    {
        document.getElementById ("number").value="";
        console.log ("Operando no válido");
        return false;
    } else {
        return true;
    }
}

var resultado=0;

var suma = (a,b) => parseFloat(a) + parseFloat(b); // Función suma dos números y los fuerz como números FLOAT

var resta = (a,b) => a-b; ////Función resta de dos numeros devolviendo su valor

var multiplicacion = (a,b)=> a*b; ////Función multiplicación de dos numeros devolviendo su valor

var division = (a,b)=> a / b;  //Función division de dos numeros devolviendo su valor


function botonSuma (){

    var num = document.getElementById ("number").value;
    if (esNumero (num)) {
        resultado= suma (resultado,num);
        console.log(resultado);
        document.getElementById ("number").value=""
    }
}

function botonResta (){
 
    var num = document.getElementById ("number").value;
    if (esNumero (num)){
        resultado= resta (resultado,num);
        console.log(resultado);
        document.getElementById ("number").value="";
    }
}

function botonMulti (){

    var num = document.getElementById ("number").value;
    if (esNumero (num)) {
        resultado= multiplicacion (resultado,num);
        console.log(resultado);
        document.getElementById ("number").value="";
    }
}

function botonDiv (){
    
    var num = document.getElementById ("number").value;
    if  (esNumero (num)) {
        resultado= division (resultado,num);
        console.log(resultado);
        document.getElementById ("number").value="";
    } 
}


function botonRes () {
    document.getElementById ("resultado").innerText = ("El resultado= "+resultado);
}

function botonBorrar () {
    resultado=0;
    document.getElementById ("resultado").innerText ="";
    console.log (resultado);
}


document.getElementById ("Suma").addEventListener ("click", botonSuma);

document.getElementById ("Resta").addEventListener ("click", botonResta);

document.getElementById ("Multiplicacion").addEventListener ("click", botonMulti);

document.getElementById ("Division").addEventListener ("click", botonDiv);

document.getElementById ("igual").addEventListener ("click", botonRes);
document.getElementById ("borrar").addEventListener ("click", botonBorrar);