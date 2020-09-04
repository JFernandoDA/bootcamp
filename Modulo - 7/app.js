//----------------------------------------Ejercicio 1 caso 1------------------------------------------
// Validar una cuenta IBAN de forma que este formada por dos letras y 22 números

console.log ("-----------------Ejercicio 1 caso 1------------------");

let patternIban = /^[a-z]{2}\d{22}$/i; //Se declara una variable let en vez de const pues se va a modificar el patrón en los siguientes casos del ejercicio

const iban =["ES6600190020961234567890", "F660019002096123456789", "FR1200190020961234567890", "FR25 0019 0020 9612 3456 7890", "es 35 12341234 1234 1234 1234"];

iban.forEach (value=> { console.log ("El IBAN: '"+ value + "' Es válido? " + patternIban.test(value))});



//----------------------------------------Ejercicio 1 caso 2------------------------------------------
//validar un IBAN permitiendo ahora espacios cada 4 díjitos

console.log ("-----------------Ejercicio 1 caso 2------------------");

patternIban = /^[a-z]{2}\d{2}\s?(\d{4}\s?){5}$/i; 

iban.forEach (value=> { console.log ("El IBAN: '"+ value + "' Es válido? " + patternIban.test(value))});



//----------------------------------------Ejercicio 1 caso 3------------------------------------------
//Vamos a extraer el código de páis y el dígito de control

console.log ("-----------------Ejercicio 1 caso 3------------------");

patternIban = /^([a-z]{2})(\d{2})\s?(\d{4}\s?){5}$/i;  //Se agrupa en paréntesis los datos que vamos a extraer

//Por cada elemento del array con IBAN se comprueba que cumpla las condiciones del patron para validar el IBAN y se muestra el código de país y el díjito de control
iban.forEach (value=> { if (patternIban.test(value)) 
                        console.log ("El código del país es: " + value.match (patternIban)[1]+ " y el dígito de control es: " + value.match (patternIban)[2])})



//----------------------------------------Ejercicio 2 caso 1------------------------------------------
//validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar: 2021 GMD, 2345-GMD, 4532BDB

console.log ("-----------------Ejercicio 2 caso 1------------------");

const matriculas = ["2021 GMD", "2345-GMD", "4532bdb", "0320-AAA", "123ABC", "0124_XCT"]; //array de matrículas

const patternMatriculas = /(\d{4})\s?-?([A-Z]{3})/im; //patrón de validación de matriculas

//Comprobamos que las matriculas del array cumplan o no el patrón
matriculas.forEach (value=> {console.log ("La matrícula: " + value + " ¿Es correcta? " + patternMatriculas.test(value))});



//----------------------------------------Ejercicio 2 caso 2------------------------------------------
//Vamos a extraer por un lado la parte numérica y por otro las letras.

console.log ("-----------------Ejercicio 2 caso 2------------------");

//Por cada elemento del array con matrículas se comprueba que cumpla las condiciones del patron para validarlas y se muestra la parte numérica por un lado y las letras por otro
matriculas.forEach (value=> { if (patternMatriculas.test(value))
                                  console.log("La parte numérica es: " + value.match(patternMatriculas)[1] +  " Y las letras son:" + value.match(patternMatriculas)[2])});


//----------------------------------------Ejercicios adicionales --------------------------------------

console.log ("-------------------Ejercicios adicionales -----------------");

//Extraer imágenes de un fichero HTML
//Caso 1: De una sola linea extraer el contenido de src:
console.log ("----------Ejercicio adicionales Extraer src de un IMG-------------");


const text = '<img id="img1" src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>'; //IMg en una sola línea comprobar y extraer el SRC

const patternImg = /^<img id="...." src="(.{2,}\.[a-z]{3,4})"\/>$/im //Patrón para calidar el IMG y entre préntesis la info a extraer

console.log ("El img es válido: " + patternImg.test(text)); //Se hace el test para comprobar la validez
console.log ("El src de la imagen es: " + text.match(patternImg)[1]); //Y con match se obtiene el valor del src



//Caso 2: De un HTML extraer todos los src de todos los objetos img:
console.log ("----------Ejercicio adicionales Extraer imágenes de un fichero HTML-------------");
const text2 = `<html>
<body>
<img
src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</body>
</html>`

const patternHTML =/(https:\/\/.{1,}.(png|jpg|gif))/gm  //Patrón para validar el HTML

console.log ("El HTML tiene un formáto válido? " + patternHTML.test(text2));  //Se valida
console.log ("Y las imagenes son: " + text2.match(patternHTML)) ////Y con match se obtiene el valor del src



//Ejercicio tarjeta de crédito
//validar tarjeta de crédito que empieza por 50-54 y obtener los números en grtupos de 4 díjitos

console.log ("----------Ejercicio adicionales comprobar tarjeta de crédito-------------");

const patternTcredito = /^((50|51|52|53|54|55)\d{2})(\s?|-?)(\d{4})(\s?|-?)(\d{4})(\s?|-?)(\d{4})$/im  //Expresión regular para validar las tarjetas

const tarjetas = ["6099 6400 0000 0001","5199-6400-0001-0001","5399640000000000","5299-64000-000-000"];  //Array con las tarjetas

tarjetas.forEach (value=> { console.log ("La tarjeta: " + value + " ¿tiene un formato válido? " + patternTcredito.test(value))}); //Comprobamos que el formato sea válido

//Por cada elemento del array con tarjetas se comprueba que cumpla las condiciones del patron para validarlas y se muestran los números en grupos de 4
tarjetas.forEach (value => {if (patternTcredito.test(value))
                               console.log ("El 1º conjunto de 4 números es: " + value.match(patternTcredito)[1] + " / El 2º conjunto de 4 números es: " + value.match(patternTcredito)[4] + " / El 3º conjunto de 4 números es: " + value.match(patternTcredito)[6] + " / El 4º conjunto de 4 números es: " + value.match(patternTcredito)[8])});;



/**  validar una clave teniendo en cuenta que pueden ser:
 * Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un
             numero y un caracter especial.
*Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un  
           numero y al menos 8 caracteres de longitud.Comprobar si una clave es fuerte o no: */

console.log ("-----Ejercicio adicionales validar una clave compleja o moderada----------");

const patternKey = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/  // Expresión regular para validar claves moderadas

const patternKeySecure = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/  //Expresión regular para validar claves complejas (seguras)

const claves = ["Clave1Moderada", "Clave$segura123","clavechunga"]; //Array con claves

claves.forEach (value=> {console.log ("La clave: "+ value + " ¿es moderada? " + patternKey.test(value))}); //validamos si la clave es moderada o no

claves.forEach (value=> {console.log ("La clave: "+ value + " ¿es compleja? " + patternKeySecure.test(value))}); //validamos si la clave es compleja o no


//Buscar un patrón para validar una URL;
//Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).

console.log ("----------Ejercicio adicionales validar una URL-------------");

const patternURL = /^((http|https):\/\/)?(www\.)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i  //Expresión regular para validar una URL

const urls = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net", "lemoncaode.net/index.html"]; //Array con URL´s

//Por cada valor del array se valida que la URL sea correcta
urls.forEach(value=> {console.log("la URL: " + value + " ¿Es válida? " + patternURL.test(value))});



// validar un color en Hexadecimal 
console.log ("--------Ejercicio adicionales validar un color HEX-----------");

const patternHEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; //Expresión regular para validar un color hexadecimal

const hexColors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000"];  // array de colores hexadecimales

//Por cada valor del array se valida que el color en HEX sea correcta
hexColors.forEach (value=> {console.log ("El color ", value, "Tiene un formato válido en HEX: ", patternHEX.test(value)) })