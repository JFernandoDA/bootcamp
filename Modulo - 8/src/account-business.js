// account-business.js

//Importamos con ES6
import * as UtilsAB from "./style-business"

//Importamos con CommonJS
//const UtilsAB = require ("./style-business")
  
function getClientAccountsElement(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
      ul.append(getAccountElement(account));
    }
    return ul;
  }
  
  function getAccountElement(account) {
    const li = document.createElement("li");
  
    li.style = UtilsAB.getNodeStyle(account);
  
    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    return li;
  }

//Exportamos con CommonJS
//module.exports = { getClientAccountsElement : getClientAccountsElement};

//Exportamos con ES6
export { getClientAccountsElement}  //Función usada por client-business.js