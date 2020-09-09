 // style-business.js
  
 function getNodeStyle(account) {
    if (account.money < 0) {
      return "color: red";
    }
  
    return "color: blue";
  }

//Exportamos con CommonJS
//module.exports = {getNodeStyle : getNodeStyle};

//Exportamos con ES6
export {getNodeStyle}  //función usada por account-business.js