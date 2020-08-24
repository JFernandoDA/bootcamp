
//Declaramos nuestro objeto reserva. con las propiedaddes número de noches, tipo  de habitación, si solicitamos SPA y número de días de parking
var reserva = {
    numNoches: 1,
    tipoHab: 1,
    spa: false,
    parking: 0,
}

//Función para calcular el precio de una habitación según el tipo de habitación que el usuario haya seleccionado
var calcularPrecioHabitacion = () => {
    var precio;
    switch (reserva.tipoHab) {
        case "1": precio=100; break;  //precio habitación Standar
        case "2": precio=120; break;  //precio habitación suite junior
        case "3": precio=150; break;  //precio suite superior
    }
    return precio*reserva.numNoches;  // devolvemos el precio/noche por el número de noches
}

var calcularParking = () => reserva.parking*10;   // calculamos el precio del parking 10€/noche y devolvemos el valor


//Función que comprueba si el usuario ha seleccionado el SPA y carga al cliente 20€ por día de estancia. Devolviendo ese importe.
var calcularSpa = ()=> {
    if (reserva.spa) {
        return reserva.numNoches*20;
    } else {
        return 0;
    }
}


//función que calcula el precio total de la reserva llamando a las funciones que calcular el precio total por habitación, el parking y el SPA
var calcularPrecio = ()=> calcularPrecioHabitacion() + calcularParking() + calcularSpa ();


//Esta función recogera los datos introducidos por el usuario en los diferentes inputs y select del index.html y los introducirá en nuestro objeto reserva
var datosReserva = () => {
    reserva.tipoHab=document.getElementById ("tipoHab").value;  // Tipo de habitación seleccionada por el usuario
    console.log ("Tipo hab "+reserva.tipoHab);
    fotoHabitacion ();  //llama a la función que carga la imagen correspondiente al tipo de habitación
    console.log (document.getElementById ("fotoHotel").src);


    reserva.numNoches = document.getElementById ("numNoches").value; // recoge el número de noches seleccionada por el ususario
    console.log ("Num Noches " +reserva.numNoches);

    reserva.spa = document.getElementById ("spa").checked;  // asigna a reserva.spa true o false en función de si el usuario ha seleccionado o no la opción de spa
    console.log ("SPA "+reserva.spa);

    reserva.parking = document.getElementById ("parking").value; // número de días de parking seleccionado popr el usuario
    console.log ("parking ", reserva.parking);

    //Finalmente se le muestra al usuario el precio de la reserva llamando a la función que calcula el precio total de la reserva y lo muestra en el <h2> con el id precio
    document.getElementById ("precio").innerHTML ="El precio de la reserva es de: " + calcularPrecio () + " €";  
}

//Función que cambia la foto de la habitación según el tipo de esta seleccionado por el usuario
var fotoHabitacion = () => {
    switch (reserva.tipoHab) {
        case "1": document.getElementById ("fotoHotel").src ="./img/standar.jpg";   //Si es hab Standar
        break;

        case "2": document.getElementById ("fotoHotel").src ="./img/suite-junior.jpg"; //Si es una suite Junior
        break;

        case "3": document.getElementById ("fotoHotel").src ="./img/suite.jpg"; //Si es una Suite superior
        break; 
    }
}


datosReserva ();  // llamamos a la función que muesta los datos iniciales por defecto (hab standar y 1 noche)

//Si el usuario cambia el tipo de habitación se vuelve a llamar a datos reserva para cambiar los datos del objeto reserva y actualiza el precio
document.getElementById ("tipoHab").addEventListener("change",datosReserva);  

//Si el usuario cambia el número de noches se vuelve a llamar a datos reserva para cambiar los datos del objeto reserva y actualiza el precio
document.getElementById ("numNoches").addEventListener("change",datosReserva);

//Si el usuario selecciona el SPA se vuelve a llamar a datos reserva para cambiar los datos del objeto reserva y actualiza el precio
document.getElementById ("spa").addEventListener("click",datosReserva);

//Si el usuario cambia el número de días de parking  se vuelve a llamar a datos reserva para cambiar los datos del objeto reserva y actualiza el precio
document.getElementById ("parking").addEventListener("change",datosReserva);

