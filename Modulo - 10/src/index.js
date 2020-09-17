const Utils = require("./app.js");
const Data = require("./data.js");

console.log("El objeto worker tiene la propiedad 'ID'? ", Utils.hasId(Data.worker));

console.log("El primer elemento del array es: ", Utils.head(...Data.languajes));

console.log("El resto de elementos menos el primero es: ", Utils.tail (Data.languajes));

console.log("Eprimer elemento movido a la ultima posición: ", Utils.swapFirstToLast (Data.languajes));

console.log("El objeto worker sin id es: ", Utils.excludeId (Data.worker));

console.log("las palabras que empiezan por la 'A' son: ", Utils.wordsStartingWithA (Data.words));

console.log("Los elementos concatenados y separados por | : ", Utils.concat ("esto", "es", "una", "cadena", "concatenada", "con", "el", "separador '|'"));

console.log("'1,2,3,4,5,6' multiplicado por 2 es: ", Utils.multArray ([1,2,3,4,5,6],2))

console.log("El producto de '1,2,3,4,5,6' es: ", Utils.calcMult (1,2,3,4,5,6))

console.log("en ", Data.languajes, "Cambiamos el orden de los dos promeros ", Utils.swapFirstSecond (Data.languajes));

console.log("Empiezan todas las palabras",Data.languajesWithJ,"  por 'J'? ", Utils.longest(Data.languajesWithJ,"J"));

console.log("En 'Estaciones', la 'e' se encuentra: ", Utils.searchInStringV1("estaciones", "e"), " veces");

console.log("En 'Estaciones', la 'e' se encuentra: ", Utils.searchInStringV2("ESTACIONES", "e"), " veces");

console.log("c,f,z,r,e,a,b,h ordenado alfabeticamente: ", Utils.sortCharacters ("cfzreabh"));

console.log ("Texto concatenado: ", Utils.shout("Estas", "palabras", "Estan", "concatenadas"));

console.log("Los IVA's de los productos son", Utils.getIVA(Data.shoppingCart));

console.log("los articulos ordenados por unidades son: ",Utils.orderShoppingCart(Data.shoppingCart));

console.log("El total gastado en droguería es de: ", Utils.totalDrogueria(Data.shoppingCart.filter(item => item.category==="Droguería")));

let aux = Utils.listShopping (Data.shoppingCart);

aux.forEach(element =>console.log (element));