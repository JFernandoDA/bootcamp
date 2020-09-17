//Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
//propiedad llamada id (debe devolver booleano true / false ).
//TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const hasId = (obj) => obj.hasOwnProperty("id") ? true : false;

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
//TIP: No utilices el corchete ([]) para acceder a la posición 0.

const head = (first) => first;

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
//elementos menos el primero.
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const tail = (myArray) => {
    const [, ...rest] = myArray;
    return rest;
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
//primer elemento ha sido colocado en la última posición.
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const swapFirstToLast =(myArray) => {
    const [first ,...rest] = myArray;
    return [...rest,first];
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
//la propiedad id si la hubiera.
//TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

const excludeId = (obj) => {
    const {id,...rest} =obj;
    return rest;
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
//filtrado con aquellas palabras que empiecen por a.
//TIP: No utilices bucles.

const wordsStartingWithA = (myArray) => myArray.filter(word => word[0] === "A"||word[0] === "a");

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
//concatenación de todos, separados por | .

const concat = (...words) => words.join(" | ");

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
//( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
//TIP: No utilices bucles.

const multArray = (arr, n) => arr.map(number => number*n);

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
//producto de todos ellos.
//TIP: No utilices bucles.

const calcMult = (...arr) => arr.reduce((total,number)=> total * number);

//                      -------------------------EJERCICIOS ADICIONALES-----------------------------
//---------------------------------------------------------------------------------------------------------------------
//Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
//intercambiado por el segundo.
//TIP: No modifiques el array de entrada original.

const swapFirstSecond = (arr) => {
    const [first, second, ...rest] = arr;
    return [second,first,...rest];
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
//cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
//TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

const longest = (arr,char) => arr.every(element => {

    const [first,]= element
  
    if (first === char)
        return true
    else 
        return false
} )
    

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
//cuantas veces aparece dicho carácter en el string.
//TIP: No utilices bucles. TIP: Convierte el string a un array mediante Array.from() .



const searchInStringV1 = (myString,char) => { 
    const arr =  Array.from (myString.toLowerCase());

    return arr.reduce((total, word) => total + (word===char ? 1 : 0) ,0)
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar reduce .
// TIP: No utilices bucles.

const searchInStringV2 = (myString,char) => { 
    const arr =  Array.from (myString.toLowerCase());
    const aux = arr.filter(word => word===char);
    return aux.length;
}

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
//TIP: No utilices bucles. No modifiques el string original de entrada. TIP: Convierte el string a un array mediante Array.from() .

const sortCharacters = (myString)=> {
    const arr = Array.from(myString)
    return arr.sort()
} 

//---------------------------------------------------------------------------------------------------------------------
//Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
//concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
//TIP: No utilices bucles.

const shout =(...arr)=> (arr.join("! ")+"!").toLocaleUpperCase();

//---------------------------------------------------------------------------------------------------------------------
/*
Dada una lista de la compra:

A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
B. Ordena la lista de más a menos unidades.
C. Obtén el subtotal gastado en droguería.
D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
TIP: No utilices bucles.
*/

//A.
const getIVA =(arr) => arr.map(element => ((element.price*0.21)*element.units).toFixed(2));

//B.
const orderShoppingCart =(arr) =>{
    const shopping = arr.slice();
    return shopping.sort((itemA,itemB) => itemA.units>itemB.units ? -1:1);
} 

//C.
const totalDrogueria =(arr) =>arr.reduce((total,element)=> total += (element.price*element.units),0);

//D.
const listShopping =(arr) => {
    arr.sort((itemA,itemB) => {return ((itemA.category<itemB.category) ? -1 : 0 ) })

    return arr.map (element => element.product + " -> " + element.price*element.units + "€")
}


module.exports = { 
    hasId: hasId,
    head: head,
    tail: tail,
    swapFirstToLast: swapFirstToLast,
    excludeId: excludeId,
    wordsStartingWithA: wordsStartingWithA,
    concat: concat,
    multArray: multArray,
    calcMult: calcMult,
    swapFirstSecond: swapFirstSecond,
    longest: longest,
    searchInStringV1: searchInStringV1,
    searchInStringV2: searchInStringV2,
    sortCharacters: sortCharacters,
    shout: shout,
    getIVA: getIVA,
    orderShoppingCart: orderShoppingCart,
    totalDrogueria: totalDrogueria,
    listShopping: listShopping
}