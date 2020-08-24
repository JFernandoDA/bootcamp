//Declaración del array con los artículos del carrito
const carrito = [ 
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];


var articulosPremium=[]; //declaramos un array para filtrar los articulos premium


for (i=0; i<carrito.length;i++) {// recorremos todo el carrito de la compra 
    if (carrito[i].premium==true) { //Buscamos los artículos premium
        articulosPremium.push (carrito[i]); //y los añadimos al array que contiene solo artículos premium
    }
}



//----------------------------------------------------------------------------------------------------------------------------------

    //Función que lista el carrito de la compra en consola y el el documento HTML
function listarDetalles () {

    //document.rem
    var n = 1; //inicialiazamos el números de artículo a listar

    document.getElementById ("producto").innerHTML=""; //vaciamos los datos previos que podría haber el el contenedor de productos

    for (item of carrito) {
        listarArticulo (item,n); //Llamamos a la función que lista el producto y le pasamos el número de producto 
        n+=1;  //incrementamos el número del artículo
    }
    console.log ("-----------------------------------------------"); ///Separador
    console.log ("Total artículos: ",n-1);  // Se muestra el número total de artículos en la consola

    var totalArticulos = document.createElement ("h2"); //Se crea un parrafo
    var contenido  = document.createTextNode ("El número total de artículos es de: "+ parseInt(n-1)); //// Se muestra el número total de artículos en HTML
    totalArticulos.appendChild(contenido); //Se le asigna al parrafo el valor del precio almacenado en la variable anterior
    document.getElementById ("producto").appendChild (totalArticulos); //añade el parrafo al DIV producto
        
    var precioTotal =  totalPrecio();
    precioTotal= precioTotal.toFixed (2);
    console.log ("El precio total es de: "+ precioTotal +"€"); //Se muestra el precio total de la compra en consola

    var totalEuros = document.createElement ("h2"); //Se crea un parrafo 
    var contenido  = document.createTextNode ("El precio total es de: "+ precioTotal +"€"); //Se muestra el precio total de la compra en HTML
    totalEuros.appendChild(contenido); //Se le asigna al parrafo el valor del precio almacenado en la variable anterior
    document.getElementById ("producto").appendChild (totalEuros); //añade el parrafo al DIV producto

    //Comprobamos si hay que aplicar gastos de envío (Si hay algún producto no premium) o no (Todos los productos son premium)
    if (gastosEnvio ()) { // Si todos son premium
        console.log ("todos los artículos son premium. Gastos de envío 0€"); //Se muestra por cosola los gastos de envío de 0€
     
        //Se crea un parrafor en la web para informar de que los gatos de envío son gratis
        var mostrarGastosEnvio = document.createElement ("h3");
        var contenido  = document.createTextNode ("todos los artículos son premium. Gastos de envío 0€");
        mostrarGastosEnvio.appendChild(contenido);
        document.getElementById ("producto").appendChild (mostrarGastosEnvio);
    }else {
        //En caso de que no todos los productos sean premium se informa al cliente que se cobrarán gastos de envío por consola y en el cuerpo de la web
        console.log ("No todos los artículos son premium. Se cargrán gastos de envío");
     
        var mostrarGastosEnvio = document.createElement ("h2");
        var contenido  = document.createTextNode ("No todos los artículos son premium. Se cargrán gastos de envío");
        mostrarGastosEnvio.appendChild(contenido);
        document.getElementById ("producto").appendChild (mostrarGastosEnvio);
    }
}


//----------------------------------------------------------------------------------------------------------------------------------


//función que borra el producto con Id = 54657
function borrarProducto54657 () {  
    for (i=0; i<carrito.length;i++) {  //Recorre el array del carrito compra
        if (carrito[i].id===54657) { // Si el Id coincide con 54657
            carrito.splice(i,1); //Borra ese artículo
            alert ("Se ha borrado el artículo 54657")
        }
    }
    for (i=0; i<articulosPremium.length;i++) {  //Recorre el array de los artículos premium por si estuviera ahí (si lo cambiamos manualmente)
            if (articulosPremium[i].id===54657) { // Si el Id coincide con 54657
                articulosPremium.splice(i,1); //Borra ese artículo del array de artículos premium
            }
        }
    
    listarDetalles(); // Se llama a la función que lista el carrito
}


//----------------------------------------------------------------------------------------------------------------------------------


//Función que calcula el precio total del carrito de la compra
function totalPrecio (){
    let total=0;  //inicializamos el total a 0€

    for (articulo of carrito) {  //recorremos el array y volcamos en artículo cada elemento (producto) contenido en el carrito
        total =total+ articulo.price*articulo.count; //Se le suma al total anterior elprecio del artículo por la cantidad de artículos comprados
    }

    if (total>100) { // si el total es superior a 100€ se hace un descuento del 5%
        alert ("se ha aplicado un descuento del 5% al superar los 100€"); //Se muestra un mensaje informando al comprador
        total =total*0.95; // se le resta el 5% al precio total
    }
    return total; // se devuelve el importe total de la compra
}


//----------------------------------------------------------------------------------------------------------------------------------


// función que lista un solo artículo. 
function listarArticulo (item,n) {
        
    //por cada artículo en nuestro carrito ponemos un separador indicando el número de artículo
    var otroArticulo = document.createElement ("p"); //Se crea un parrafo
    var contenido  = document.createTextNode ( "---------Artículo "+n+"--------------");
    otroArticulo.appendChild(contenido); //Se le asigna al parrafo el valor del precio almacenado en la variable anterior
    document.getElementById ("producto").appendChild (otroArticulo); //añade el parrafo al DIV producto
        
    console.log ("-----------Artículo "+ n +"---------------"); //También lo hacemos por consola

    for (propiedad in item) {  // por cada propiedad en el artículo que se pasa como parámetro a la función
        console.log (propiedad + ": "+ item[propiedad]);// se imprime en consola

        var pPropiedad = document.createElement ("p"); //se crea un parrafo
        var contenido  = document.createTextNode (propiedad + ": "+ item[propiedad]); //asignamos el nombre de la propiedad y el valor a una variable
        pPropiedad.appendChild (contenido); //que se asigna al parrafo
        document.getElementById ("producto").appendChild (pPropiedad); //añade el parrafo al DIV producto
    }
    console.log ("----------------------------------"); //separador de producto en consola
}
 

//----------------------------------------------------------------------------------------------------------------------------------


//función para listar los artículos Premium del carrito de la compra
function ArticuloPrime () {
    console.log ("-----------------Artículos premium-----------------"); //separador en consola
        
    document.getElementById ("producto").innerHTML=""; //vaciamos los datos previos que podría haber el el contenedor de productos

    for (articulo of articulosPremium) { //por cada artículo en el array de productos premium
            listarArticulo (articulo,"premium"); //Se llama a la función que lista el artículo
        }
}


//----------------------------------------------------------------------------------------------------------------------------------


//función que comprueba si se deben aplicar gastos de envío o no dependiendo si todos los artículos en el carrito son premium
function gastosEnvio () {
    let prime = true; //inicializamos la variable

    for (articulo of carrito) {  // recorremos el array del carrito de la compra
        if (articulo.premium) {  // si el artículo es premium
            prime = prime && articulo.premium; //Prime será TRUE si el valor previo de prime es TRUE y articulo.premium es TRUE.
        } else {
            prime=false; //en caso contrario es FALSE y nunca volvera a ser true pues como vemos dos líneas antes FALSE && TRUE = FALSE
        }
    }
        console.log ("¿Todos los articulos son premium? ", prime);  //Mostramos el resultado por casonsola
        return prime;  //devolvemos el booleano de si todos los artículos con Premium o no
}


//----------------------------------------------------------------------------------------------------------------------------------

//se listan los artículos que hay en el carrito
listarDetalles ();
  
//Se añade el evento click al botón detalles de la compra y se llama a la función que lista todos los productos del carrito y sus propiedades
document.getElementById ("listarArticulos").addEventListener ("click", listarDetalles); 

//Evento click registrado al botón "borrar54657" que llama a la función que borra dicho artículo
document.getElementById ("borrar54657").addEventListener ("click", borrarProducto54657);

//Evento click registrado al botón "Premium" que llama a la función que lista solo los artículos premium
document.getElementById ("Premium").addEventListener ("click", ArticuloPrime);