const money =[200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]; //Constante con los tipos de billetes que pudiera haber en la caja

let cash = [2,2,5,10,15,10,20,30,50,50,50,50,50,50]; //Cantidad de billetes/monedas que tenemos en caja, cada posición equivale a la cantidad de billetes/monedas en el array anterior



//Función que calcula el cambio que tenenmos que dar al cliente (importe pagado - importe compra)
var calculateChange =() => parseFloat(document.getElementById("totalPaid").value)- parseFloat(document.getElementById("totalPrice").value);



//Función que va llamando a funciones para mostrar el cambio al usuario
var calculateMoney = () => {
    let change = calculateChange (); //Calculamos el cambio a devolver
    
    if (isEnoughtChange(change) && change>0){  //Comprobamos que haya suficiente cambio en caja y y que el cambio a dar sea un número positivo (el importe pagado sea mayor que el que se tiene que pagar)
        let aux =0; //declaramos variable auxiliar

        let container = showChange (change);  //llamamos a la funciónque muestra el cambio total a devolver en pantalla al usuario
        
        for (let i=0; i<money.length;i++) { //por cada tipo de billete/moneda que tengamos
            aux = change/money[i]; //dividimos el cambio entre la moneda 
            if (aux >= 1) {  //Si es mayor que o igual a 1
                change=cashStock (change,aux,i,container); //llamamos a la función que calcula el cambio en función de la cantidad de billetes/monedas que tengamos en caja
            }
        }
    }
}



//Función que comprueba que tengamos stock de la moneda/billete correspondiente para dar el cambio
var cashStock = (change, num, index, container) =>{ 

    if(cash[index]>=num) { //Si tenemos mayor cantidad de monedas/billetes de las que necesitamos
        createElementsInIndex (container,num,money[index]); //llamamos a la función que muestra las monedas a devolver
        change -= (Math.floor(num)*money[index]); //al cambio le restamos el importe devuelto
        change= change.toFixed(2); // y lo redondeamos a dos decimales
        cash[index] -= parseInt(num); //restamos el número de billetes/monedas que hayamos usado para dar el cambio
        console.log (cash); //se muestra por consola el cambio que nos queda en caja a titulo informativo
        return change; //devolvemos el cambio que nos queda por devolver
    } else { 
        if (cash[index]<num && cash[index]>=1){  //Si tenemos monedas/billetes, pero menos de las que necesitamos
            num = cash[index]; //le asignamos a la cantidad de billetes/monedas el número de monedas que hay
            createElementsInIndex (container,num,money[index]); //llamamos a la función que muestra las monedas a devolver
            change -= (Math.floor(num)*money[index]); //al cambio le restamos el importe devuelto
            change= change.toFixed(2); // y lo redondeamos a dos decimales
            cash[index] -= parseInt(num); //restamos el número de billetes/monedas que hayamos usado para dar el cambio
            console.log (cash) //se muestra por consola el cambio que nos queda en caja a titulo informativo
            return change; //devolvemos el cambio que nos queda por devolver 
         } else {  //En caso de que no quedarán monedas/billetes de ese importe
            return change;  //devolvemos todo el cambio que se paso originalmente como parámetro sin modificarlo
         }
    }
}  



//función para comprobar que haya cambio suficiente en caja
var isEnoughtChange = (change) => {
    let aux=0;  //declaramos variable auxiliar
    for (let i=0; i<money.length; i++) {  //por cada tipo de moneda que tengamos
        aux= aux + (cash [i]*money [i])  //Calculamos todo el dimero disponible en caja
    }

    console.log ("caja total ",aux); //Lo mostramos por consola a título informativo

    if (aux<change) { //Si no hay cambio suficiente en caja
        alert ("Cambio insuficiente en caja");  //Mostramos mensaje de alerta
        return false; //y devolvemos false
    } else {
        return true  //En caso contrario devolvemos true
    }
}



//Creamos un elemento HTML en index para mostrar el billete/moneda a entregar y su cantidad 
var createElementsInIndex = (container,aux,coin)=> {
    let changeUnit = document.createElement ("h4");  //se crea el elemento que en este caso es un H4
    changeUnit.setAttribute ("class","changeCoin");  //se le da la clase changeCoin
    container.appendChild (changeUnit);  //se le hace hijo del div container pasado como parámetro (que es div con ID 'contenedorCambio')
    changeUnit.innerHTML = Math.floor(aux) + " unidades de: " + coin + "€";  //Se rellena con la cantidad de monedas y el tipo de monedas
}



//Creamos un elemento HTML en index para mostrar el importe total del cambio
var showChange = (change) => {
    let container  = document.getElementById ("contenedorCambio");  //se accede al div contenedor
    container.innerHTML = ""; //Se vacia del los elementos que anteriormente pudiera contener
    let showChange = document.createElement ("h2"); //Se crea el elemento en sí un H2 en este caso
    showChange.setAttribute ("class","totalChange");  //se le asigna la clase 'totalChange'
    showChange.innerHTML= "El cambio es de: "+change.toFixed(2)+" €";  //se rellena con el importe del cambio a devolver al cliente
    container.appendChild(showChange);  //se le hace hijo del div 'contenedorCambio'

    return container;  //devolvemos el contenedor
}



//Añadimos el evento on click al botón para iniciar todo el proceso de calcular el cambio
document.getElementById ("calculate").addEventListener("click",calculateMoney);