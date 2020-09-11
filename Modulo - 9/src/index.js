import "./styles.css";

import * as Utils from "./utils"
import * as dataBusiness from "./data-business"

//Se llama a la función que devuelve una promesa que recupera un array con todos los personajes de la serie
dataBusiness.getAllCharacters().then (data=> {
    const characters = data;
    const nodes = [];
    document.getElementById("root").innerHTML= "Lista de episodios debajo"; //Se borra el "loading" del div root y se informa que el listado de episodios esta abajo de los personajes
    
    for (let character of characters) {         //recorremos el array con todos los personajes recuperados con axios
        const node = Utils.createCharacterRow(character); //se llama a la función que crea una fila con los datos del personaje que le pasamos como parámetro
        node.onclick = function () {    //añadimos el evento on click para que al pulsar un personaje se muestre en detalle
            dataBusiness.getCharacter(character).then (character => { //se llama  la función que devuelve una promesa con los datos del personaje
                Utils.showCharacter (character); //Se llama a la función qeu muestra el caracter pasado por parámetro
                showQuote();  //Llamamos a la función show quote declarada justo debajo
                });
            }
        function showQuote() { 
            dataBusiness.getQuote (character.char_id) //se llama a la función que devuelve una promesa con la frase célebre del personaje
                .then(quote => { 
                    Utils.showQuote(quote); //Llamamos a la función que la muestra en el cuadro de detalles del personaje
                })
        }
        nodes.push (node); //al array que contiene todos los div de los personajes se le añade el último creado
      }

    for (let node of nodes) {
        document.getElementById("root").append(node); //por cada div de personajes se hace hijo del div root
      }   
});

dataBusiness.getEpisodeList().then(data =>{  //Se llama  a la función que devuelve la promesa con la lista de episodios
    const episodes = data;

    for (let episode of episodes) {  //Se recorre el array de episodios
        if (episode.series === "Breaking Bad") { //Imprime solo los episodios de la serie breaking bad, no de la precuela better call Saoul
            Utils.createEpisodeRow(episode); //Se llama a la función que muestr los episodios por pantalla
        }
    }
});





