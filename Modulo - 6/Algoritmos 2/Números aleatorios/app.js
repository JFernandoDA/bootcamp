//función que recoge los datos de los imputs númericos y llama a la función que genera los números aleatorios
var recopilarDatos = () => {

    let n = parseInt(document.getElementById ("Cantidad").value); // Asigna a n la cantidad de números aleatorios a generar
    console.log ("El número de anúmero a aleatorios es de : "+ n);

    let min =  parseInt(document.getElementById ("Minimo").value); //asigna a min el valor mínimo del rango de números aleatorios a generar
    console.log ("El rango de los números empieza por: "+ min);

    let max =  parseInt(document.getElementById ("Maximo").value); //asigna a max el valor máximo del rango de números aleatorios a generar
    console.log ("El rango máximo de los números es de : "+ max);

    if (n>(max-min)+1)  //Si la cantidad de números aleatorios a generar es mayor que el rango se notifica al usuario
    {
        alert ("El número de números no puede ser mayor al rango de estos")
    } else {
        randomPick (n,min,max); //En caso contrario se llama a la función que genera dichos números con los parametros introducidos por el usuario en los imputs
    }  
}

var randomPick = (n, min, max) => { //Los parametros son cantidad de numeros a generar (n), el tope por lo bajo (min) y por lo alto (max) del rango de números
    let aleatorios = []; //declaración del array que contendrá los números aleatorios
    let numero; 

    aleatorios[0] = Math.floor (Math.random()*((max-min)+1)+min); //Asignamos aleatoriamente el 1º número a la posición 0 del array

    for (let i=1; i<n;i++) { // bucle con la cantidad de iteraciones como la cantidad de números a generar -1 (el primero se genero en la sentencia anterior)

        do {
            numero = Math.floor (Math.random()*((max-min)+1)+min); //genera número aleatorio dentro del rango
        } while (aleatorios.indexOf(numero)!==-1) //Repite la acción hasta que encuantra uno que no este repetido en el array de números aleatorios

        aleatorios [i]=numero; //Asigna el número aleatorio generado anteriormete a la posición correspondiente del array
    }

    console.log ("Los números aletorios son: "+ aleatorios); //Mostramos los números por consola
    document.getElementById ("Resultado").innerHTML=aleatorios; //Mostramos los números en el HTML
}

document.getElementById("Generate").addEventListener("click",recopilarDatos); //Creamos un evento al botón genrar para comenzar el proceso de generarr númoros aleatorios