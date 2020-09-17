const worker = {
    id: 12345,
    station: "Málaga",
    department: "IT",
    tasks: "Javascript Develop"
}

const languajes = ["JavaScript" , "Python" , "Java", "ColdFusion", "C++", "c#", "PHP"];

const languajesWithJ = ["JavaScript", "Java", "JQuerry"];

const words = ["Casa", "Arbol", "Silla", "Lámpara", "Avion", "cocina", "armario"];

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
    ];

    
module.exports = { 
    worker: worker,
    languajes: languajes,
    words: words,
    languajesWithJ: languajesWithJ,
    shoppingCart:shoppingCart
};