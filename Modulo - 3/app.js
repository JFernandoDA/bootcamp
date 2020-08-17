
/**
 * Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio
multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto:
"alimentacion": 10%
"libro": 4%

Todos los resultados de los ejercicios se mostrarán por consola.

Calcular precio total
Para calcular el precio total se debe tener en cuenta:
Si el campo count es negativo o cero, el total es 0.
Si el campo count es mayor que cero, el total será la multiplicación de count por price

Calcular el IVA
Vamos a calcular el IVA (por unidad) aplicable dependiendo del tipo de producto:
Es decir:
Un producto tiene un precio sin IVA .
El precio total se saca multiplicando precio * IVA (el IVA puede ser: 0.1, 0.04, 0.21).
Dependiendo del campo "type" calculamos el precio total:
Si es "alimentacion": precio * 0.1
Si es "libro": precio * 0.04
Si es de cualquier otro tipo: precio * 0.21
 */

 //------------------------------------------------------------------------------------------

//se crea el objeto
 const product = {  
    count: 10,
    price: 12.55,
    type: "ropa"
};

var preciototal;


/**
 * //Con estructura if

 if (product.count>0) {
    preciototal=product.count*product.price; //si el numero de articulos es mayor que cero se calcula el precio total multiplicandolo por el número de productos
} else {
    preciototal= 0; // si es igual o menos a cero el precio total es cero
}

 */



//hacerlo con ternarios para practicar

preciototal = product.count>0 ? product.count*product.price : 0;  // se calcula el precio total siempre que sea mayor que cero multiplicando el precio unitario por la unidades


console.log ("El precio total es de:", preciototal, "€"); // imprimimos en la consola el precio total


// ---------------------------- Calcular IVA--------------------------------

var iva;
/**   
//se calcula el IVA en función del tipo de producto: Libro 4%, alimentación 10% y el resto al 21% 
if (product.type=="alimentacion") {
    iva=product.price*0.1;
    console.log ("El iva aplicables es del 10%. Valor del IVA: ", iva);
}else {
    if (product.type=="libro") {
        iva=product.price*0.04;
        console.log ("El iva aplicables es del 4%. Valor del IVA: ", iva);
    }else {
        iva=product.price*0.21;
        console.log ("El iva aplicables es del 21%. Valor del IVA: ", iva);
    }
}

console.log ("El precio por producto con el IVA aplicado es de: ",iva+product.price, "€");
var totalpagar = iva+product.price;
totalpagar= totalpagar*product.count;
console.log ("El precio total a pagar con el IVA aplicado es de: ",totalpagar, "€");

*/

//--------------------------Ahora con la estructura swich para practicar -----------------------------------------

//se calcula el IVA en función del tipo de producto: Libro 4%, alimentación 10% y el resto al 21%
switch (product.type) {
    case "alimentacion": 
        iva=product.price*0.1; //calcual el 10% que se aplica a la alimentación al precio unitario
        console.log ("El iva aplicables es del 10%. Valor del IVA por unidad: ", iva); // se muestra el valor del IVA y el tipo que se aplica por pantalla
        break;
    case "libro":
        iva=product.price*0.04; //calcual el 4% que se aplica a la alimentación al precio unitario
        console.log ("El iva aplicables es del 4%. Valor del IVA por unidad: ", iva); // se muestra el valor del IVA y el tipo que se aplica por pantalla
        break;
    default:
        iva=product.price*0.21; //calcual el 21% que se aplica a la alimentación al precio unitario
        console.log ("El iva aplicables es del 21%. Valor del IVA por unidad: ", iva); // se muestra el valor del IVA y el tipo que se aplica por pantalla
        break;
}

if (preciototal>0){
    console.log ("El precio por producto con el IVA aplicado es de: ",iva+product.price, "€"); // se muestra el valor del IVA y el tipo que se aplica por pantalla
    var totalpagar = iva+product.price; //precio a pagar por producto IVA+precio producto
    totalpagar= totalpagar*product.count; //Al multiplicarlo por el número de unidades nos da el total a pagar
    console.log ("El precio total a pagar con el IVA aplicado es de: ",totalpagar, "€"); // se muestra el valor del IVA y el tipo que se aplica por pantalla
}else {
    console.log ("No hay stock");
}



console.log("------------------------Ejercicio Nómina-----------------------");


/**
 * Vamos a hacer una simulación de calculo de sueldo neto en nómina (este escenario es simplificado, desafío
buscar legislación).
Partimos de:
Sueldo bruto año.
Número de hijos.
Número de pagas.

Las condiciones:
Por rango de salario:
Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
Adicionalmente:
Si el empleado tiene hijos, restarle a la retencion 2 puntos.
Con esto sacaríamos el neto anual en nómina.
Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
Desafío

 */

var empleado = {
    bruto: 14000,
    hijos: 2,
    pagas: 14
};

empleado.bruto=prompt ("Introduce sueldo bruto");
empleado.hijos=prompt ("Introduce el número de hijos");
empleado.pagas=prompt ("introduce el número de pagas anuales");

console.log ("El salario bruto del empleado es de: ",empleado.bruto,"€"); // Muestra el salario bruto anual del empleado

var retencion;

//Se calcula la rentención dependiendo del salario bruto anual y de si tiene hijos o no

if (empleado.bruto<12000) {
    retencion =0; //Retención de 0%
    console.log ("La rentención es del 0%: 0€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
} else {
    if (empleado.bruto>=12000 && empleado.bruto<24000) {
        if (empleado.hijos>0) {
            retencion=empleado.bruto*0.06; //Retención de 8% -2% por tener hijos
            console.log ("La rentención es del 8% -2% por tener hijos", retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
        }else {
            retencion=empleado.bruto*0.08; //Retención de 8%
            console.log ("La rentención es del 8% ", retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
        }
    } else {
        if(empleado.bruto>=24000 && empleado.bruto<34000) {
            if (empleado.hijos>0) {
                retencion=empleado.bruto*0.14; //Retención de 16% -2% por tener hijos
                console.log ("La rentención es del 16% -2% por tener hijos", retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
            }else {
                retencion=empleado.bruto*0.16; //Retención de 8%
                console.log ("La rentención es del 16% por tener hijos", retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
                }
            }else {
                if (empleado.hijos>0) {
                    retencion=empleado.bruto*0.28; //Retención de 30% -2% por tener hijos
                    console.log ("La rentención es del 30% -2% por tener hijos" , retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
                } else {
                    retencion=empleado.bruto*0.38; //Retención de 30%
                    console.log ("La rentención es del 30% " , retencion,"€"); //Se muesttra el total de la retención que se aplica al salario bruto anual
                }
            }
        } 
            
    
}

var salarioanualneto = empleado.bruto-retencion; //se calcula el salario neto restando al bruto las retenciones aplicables

console.log ("El salario neto anual es de: ",salarioanualneto,"€"); //y lo mostramos por consola

console.log("El total de pagas son de:",empleado.pagas," Pagas anuales"); //Se muestra el número de pagas anuales

console.log("El importe bruto de la nómina mensual es de: ",empleado.bruto/empleado.pagas,"€"); //Se calcula el salario mensual bruto

console.log("El importe neto de la nómina mensual es de: ",salarioanualneto/empleado.pagas,"€"); //Se calcula el salario mensual neto


console.log("------------------------Ejercicio opcional función IVA-----------------------");




function getTotalVat (product){
    return iva*product.count; //devuelve el valor del IVA por producto multiplicado por el número de productos
}

console.log ("El precio unitatio es de: ",product.price,"€", " y la cantidad comprada es de ",product.count); //Muestra el precio unicatio sinIVa y el número de productos


//Se imprime por consola el valor del IVA y el tipo

if (preciototal>0) {
    switch (product.type) {
        case "alimentacion": 
            console.log ("El iva aplicables es del 10%. Valor del IVA por unidad: ", iva);
            onsole.log ("El total IVA es de: ", getTotalVat(product)); //Se muestra por consola el total del IVa (IVA Unitario*unidades) llando a la función previamente declarada
            break;
        case "libro":
            console.log ("El iva aplicables es del 4%. Valor del IVA por unidad: ", iva);
            onsole.log ("El total IVA es de: ", getTotalVat(product)); //Se muestra por consola el total del IVa (IVA Unitario*unidades) llando a la función previamente declarada
            break;
        default:
            console.log ("El iva aplicables es del 21%. Valor del IVA por unidad: ", iva);
            console.log ("El total IVA es de: ", getTotalVat(product)); //Se muestra por consola el total del IVa (IVA Unitario*unidades) llando a la función previamente declarada
            break;
    }
}else {
    console.log ("No hay stock");
}


