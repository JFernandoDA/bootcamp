import axios from "axios";
import * as Utils from "./utils"

//Función que recuera desde la API de la serie braking bad los datos de todos los personajes y devuelve la promesa
const getAllCharacters = () =>{
   return axios.get ("https://www.breakingbadapi.com/api/characters")
        .then (response => {return response.data})
        .catch (error => console.log ("se ha producido un error "))
}

//Función que recuera desde la API de la serie braking bad los datos de un personaje y devuelve la promesa
const getCharacter = (character) => {
    const urlCharacter = "https://www.breakingbadapi.com/api/characters/" + character.char_id;

    return axios.get (urlCharacter)
        .then (response => {
            return response.data
        })
        .then (character => {
            return character[0]
        })
        .catch (error => console.log ("Se ha producido un error en caracter "+character.char_id))   
}

//Función que recuera desde la API de la serie braking bad losla frase célebre del id del personaje que le pasamos por parámetro y devuelve la promesa
const getQuote = (id) => {
    const url = "https://www.breakingbadapi.com/api/quotes/"+id;

    return axios.get (url).then (response => {
        return response.data[0].quote
    })
    .catch (error => console.log ("se ha producido un error en el quote"))
}

//Función que recuera desde la API de la serie braking bad los datos de todos los episodios y devuelve la promesa
const getEpisodeList = ()=> {
    return axios.get ("https://www.breakingbadapi.com/api/episodes")
        .then (response => {return response.data})
        .catch (error => console.log ("se ha producido un error en la carga de episodios"))
}

export { getAllCharacters, getCharacter, getEpisodeList, getQuote } //Funciones a exportar
