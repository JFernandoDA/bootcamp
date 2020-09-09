  // client-list-business.js

  //Importamos con ES6
  import * as UtilsCLB from "./data-business";
  import * as UtilsCLB2 from "./client-business";

  //Importamos con CommonJS
  //const UtilsCLB = require ("./data-business");
  //const UtilsCLB2 = require ("./client-business");
  
  function printClientsAccounts() {
    const clients = UtilsCLB.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = UtilsCLB2.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }


//Exportando con CommonJS
//module.exports = { printClientsAccounts: printClientsAccounts } 

//Exportamos con ES6
export { printClientsAccounts }; //Función Exportada usada por index.js

 
