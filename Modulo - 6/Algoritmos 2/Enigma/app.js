const plainAlphabet =     "abcdefghijklmnñopqrstuvwxyz:()!¡,'";  //
const encryptedAlphabet = "qw,ert(yuio'pañ:sdfg!hjklz¡xcv)bnm";


//Función para encriptar un texto
var encrypt = () => {  
    let text = document.getElementById ("decryptText").value;  //Obtenemos el texto que queremos encriptar
    text = text.toLowerCase() //Lo transformamos a ninusculas, ya que no hay mayusculas en las constantes definidas al principio
    let textEncrypted=""; //declaramos una variable para ir almacenando el texto a medida que se encripta
    

    for (let letter of text) {  //Recorremos letra letra el texto a encriptar
        if (letter=== " "){ 
            textEncrypted = textEncrypted + " ";// si es un espacio añadimos un espacio al texto encriptado
        }else {
            //en caso contrario al texto encriptado le asignmos su valor anterior y le añadimos la letra encriptada correspondiente 
            //en el array (cadena de caracteres) de caracteres encriptados
            textEncrypted = textEncrypted + encryptedAlphabet[plainAlphabet.indexOf (letter)]; 

            /*for (i=0;i<plainAlphabet.length;i++){
                if (plainAlphabet[i]===letter) {
                    textEncrypted = textEncrypted + encryptedAlphabet[i];   
                    }
            }*/
        }      
    }
   document.getElementById ("encryptText").value= textEncrypted; //mostramos el texto encriptado en el textarea correspondiente
   document.getElementById ("decryptText").value =""; //y borramos el text area para que no se pueda ver nuestro texto sin encriptar
}


//Función para desencriptar un texto
var decrypt = () => {
    let text = document.getElementById ("encryptText").value; //Obtenemos el texto que queremos desencriptar
    let textDecrypted =""; //declaramos una variable para ir almacenando el texto a medida que se desencripta

    for (let letter of text) { //Recorremos letra letra el texto a desencriptar
        if (letter=== " "){
            textDecrypted = textDecrypted + " "; // si es un espacio añadimos un espacio al texto desencriptado
        }else {
            //en caso contrario al texto desencriptado le asignmos su valor anterior y le añadimos la letra desencriptada correspondiente 
            //en el array (cadena de caracteres) de caracteres desencriptados
            textDecrypted = textDecrypted + plainAlphabet[encryptedAlphabet.indexOf (letter)];
            /*for (i=0;i<encryptedAlphabet.length;i++) {
                if (encryptedAlphabet [i]===letter)
                    textDecrypted = textDecrypted + plainAlphabet[i];
            }*/
        }
         
    }
    document.getElementById ("decryptText").value = textDecrypted; //mostramos el texto desencriptado en el textarea correspondiente
    document.getElementById ("encryptText").value =""; //y borramos el text area para que no se pueda ver nuestro texto encriptado
}


document.getElementById ("encrypt").addEventListener ("click",encrypt); //Añadimos el evento on click al botón encriptar y se llama ante este evento a la función que encripta el texto
document.getElementById ("decrypt").addEventListener ("click",decrypt); //Añadimos el evento on click al botón desencriptar y se llama ante este evento a la función que desencripta el texto
