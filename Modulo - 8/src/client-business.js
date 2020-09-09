// client-business.js

//Importamos con ES6
import * as UtilsCB1 from "./data-business"
import * as UtilsCB2 from "./account-business"

//Importamos con CommonJS
//const UtilsCB1 = require ("./data-business");
//const UtilsCB2 = require ("./account-business");
  
function getClientElement(client) {
    const allAccounts = UtilsCB1.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }
  
    const node = getClientNode(client);
    const ul = UtilsCB2.getClientAccountsElement(clientAccounts);
  
    node.appendChild(ul);
  
    return node;
  }
  
  function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
  
    return li;
  }
  
  function getFullName(client) {
    return client.first_name + " " + client.last_name;
  }

//Exportamos con CommonJS
//module.exports =  {getClientElement : getClientElement};

//Exportamos con ES6
export { getClientElement }  //función exportada usada por client-list-business.js