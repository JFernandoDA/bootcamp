/**var hotel = {
    Nombre:"Hotel Torreblaca",
    Ubicacion:"Funegirola",
    Foto:"./img/foto.jpg",
};

var resena=prompt ("Introduce Reseña del 1 al 5");
var anonimo=confirm ("Quieres que la reseña sea anónima");

document.getElementById ('Nombrehotel').innerHTML=hotel.Nombre;
document.getElementById ('UbicacionHotel').innerHTML=hotel.Ubicacion;
document.getElementById ('FotoHotel').src=hotel.Foto;

document.getElementById ('PuntuacionHotel').innerHTML="Puntuación: " + resena + " Estrellas";

document.getElementById("checkanonimo").checked = anonimo;

*/

var Hoteles = {
    Torreblanca: {
        Nombre: "Hotel Torreblanca",
        Ubicacion: "Torreblanca Fuengirola",
        Foto:"./img/Foto.jpg",
    },

    Puerto: {
        Nombre: "Hotel El Puerto",
        Ubicacion: "Centro de Fuengirola",
        Foto:"./img/Puerto.jpg",
    },

};
var seleccion = prompt ("Introduce el nombre del hotel");
/**var nombrehotel =seleccion + ".Nombre";
var Ubicacionhotel =seleccion + ".Ubicacion";
var Fotohotel =seleccion + ".Foto"; */

document.getElementById ('Nombrehotel').innerHTML=Hoteles[seleccion].Nombre;

document.getElementById ('UbicacionHotel').innerHTML=Hoteles[seleccion].Ubicacion;

document.getElementById ('FotoHotel').src=Hoteles[seleccion].Foto;


var resena=prompt ("Introduce Reseña del 1 al 5");

var estrellas ={
    una: "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    dos: "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    tres: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
    cuatro:"<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
    cinco: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
};

var anonimo=confirm ("Quieres que la reseña sea anónima");

document.getElementById ('PuntuacionHotel').innerHTML="Puntuación: " + estrellas[resena] + " Estrellas";

document.getElementById("checkanonimo").checked = anonimo;