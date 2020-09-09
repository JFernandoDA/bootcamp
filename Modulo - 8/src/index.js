// index.js 

//Importamos con ES6
import * as UtilsIndex from "./client-list-business";

//Importamos con CommonJS
//const UtilsIndex = require ("./client-list-business")

window.onload = function() {
    UtilsIndex.printClientsAccounts();
  };
  
