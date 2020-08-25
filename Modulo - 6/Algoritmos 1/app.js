// Constantes con los valores del IVA
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;


// Entrada de carrito de la compra
let products = [
{
description: "Goma de borrar",
price: 0.25,
tax: LOWER_TYPE,
stock: 2,
units: 0,
},
{
description: "Lápiz H2",
price: 0.4,
tax: LOWER_TYPE,
stock: 5,
units: 0,
},
{
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Papelera plástico",
price: 2.75,
tax: REGULAR_TYPE,
stock: 5,
units: 0,
},
{
description: "Escuadra",
price: 8.4,
tax: REGULAR_TYPE,
stock: 3,
units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Afilador",
price: 1.2,
tax: LOWER_TYPE,
stock: 10,
units: 0,
},
{
description: "Libro ABC",
price: 19,
tax: EXEMPT_TYPE,
stock: 2,
units: 0,
},
];


var divLista = document.getElementById("product-list-container"); // recuperamos el contenedor del carrito de la compra y los almacenamos en una variable

function createList () {  // Lista los elementos del carrito creando los elementos HTML necesarios

    i=1; // Ponemos el contador de productos a un valor inicial de 1
 
    for (var item of products) {

        var divProducto = document.createElement ("div");  //Creamos un contenedor DIv por cada producto del carrito
        divLista.appendChild(divProducto);  //Lo hacemos hijo del contenedor que contiene todos los productos del carrito de la compra
         
        var name = document.createElement ("span");  // creamos un Span para meter cada producto
        name.setAttribute ("Class", "product");     //le asignamos una clase
        
        textoHtml = i + ".&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ item.description + "&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;"+ item.price+ " €/un";  //un valor
        
        name.innerHTML = textoHtml;

        divProducto.appendChild (name);  //y lo hacemos hijo del contenedor que almacena cada productos
        
        createInput (item,divProducto);
        

        i++;  //Incrementamos el contador de productos
    }
}

var createInput = (item,div) => {  //Función que crea los inputs con la cantidad de productos

    var quantity = document.createElement("input");  //Creamos un input para meter la cantidad de articulos

    quantity.setAttribute("class", "productUnit"); //Le damos un nombre de clase
    quantity.setAttribute("type", "number");  //Le decimos que sera de tipo numérico (solo aceptará números)
    quantity.setAttribute("value", item.units);  // Le damos por defecto el valor de la unidades que hay en nuestro carrito de la compra
    quantity.setAttribute("min", 0); // El número minimo de artículos que podemos seleccionar es de 0
    quantity.setAttribute("max", item.stock); //El número máximo deartículos que podemos elegir es el stock que hay de cada artículo

    quantity.addEventListener("change", event => item.units =event.target.valueAsNumber); // Con el evento change cambiamos la cantidad de productos
    quantity.addEventListener ("change",activateButon); //le añadimos en evento change para con cada cambio compruebe si tiene que actvar o no el botón

    div.appendChild(quantity);  //y lo hacemos hijo del contenedor que almacena cada productos
}


var calcularSubtotal = () => {  // calcula el precio total de los articulos sin el IVA

    var subtotal=0;

    for (var item of products) {
        subtotal= subtotal + (item.price*item.units); 
    }

    return subtotal.toFixed(2); //devolvemos el total redondeado a dos decimales
}


var calcularIvaProducto = (item)=> item.price*(item.tax /100); //Calcula el iva de un producto concreto que pasamos como parámetro

var calcularIvaTotal = () => {  // Calcula el iva de todos los productos en el carrito
    var totalIva =0;

    for (item of products) {
            totalIva = totalIva +(item.units* calcularIvaProducto (item));
    }

    return totalIva.toFixed(2); // Devooolvemos el importe de todos lo IVA del carrito redondeado a dos decimales
}

var calcularTotal = () => parseFloat(calcularSubtotal()+calcularIvaTotal()).toFixed(2);  //Calcula el precio total de la compra incluyendo el IVA y lo redondea a dos decimales

 
var calcularFactura = () =>{        // Calcula el importe a pagar  llamando a las funciones uqe calculan el subtotal, los impuestos (IVA) y el total a pagar
    document.getElementById ("subtotal").innerHTML="Subtotal: "+ calcularSubtotal() + "€";
    document.getElementById ("iva").innerHTML="IVA: "+ calcularIvaTotal() + "€";
    document.getElementById ("total").innerHTML="Total: "+ calcularTotal() + "€";
} 


var activateButon = () => {  // Habilita o desabilita el botón de calcular dependiendo si hay productos o no
        var desactivar = true;

        for (var producto of products){
            if (producto.units > 0) {
                desactivar =false;
            }
        }

        if (desactivar) {
            document.getElementById("calcular").disabled=desactivar;
        } else {
            document.getElementById("calcular").disabled=desactivar;
        }
      
}

activateButon (); //Comprobamos al inicio  si hay que activar o no el boón en función de si hay unidades en el carrito o no

createList ();// Listamos los elementos del carrito de la compra

document.getElementById ("calcular").addEventListener ("click", calcularFactura);  // Al pulsar el botón de calcular se llama a la función que calcula la factura
