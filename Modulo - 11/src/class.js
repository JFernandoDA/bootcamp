//Clase que al recibir una reserva contiene métodos para calcular el total y subtotal, dependiendo de los servicios
class hotePrice {
    constructor(priceList) {
        this._booking = [];
        this._subtotal = 0;
        this._totalPrice = 0;
        this._iva = 1.1;
        this._RoomPrice = priceList;
    }

    //al introducir un valor en la propiedaad _booking se llama a los métodos para calcular el total y subtotal que se encuentran
    //en las clases hijas (tour operadores y clientes normales)
    set booking(bookings) {
        this._booking = bookings;
        this.CalculateSubtotal();
        this.CalculateTotal();
    }

    //Getter para devolver la propiedad subtotal del precio de la reserva
    get subtotal() {
        return this._subtotal;
    }

    //Getter para devolver la propiedad total del precio de la reserva
    get total() {
        return this._totalPrice;
    }
}

//Clase touroperador hija de hotelPrice que contiene los métodos para calcular el total y subtotal con las condiciones especiales
//que se aplican a los tour Operadores (15% descuento sobre el hotal y tarifa plana en el precio de las habitaciones independientemente del tipo)
class tourOperator extends hotePrice {

    super ([{type:"standard", price : 100}, {type: "suite", price : 100}])

    CalculateSubtotal (){
        this._subtotal =  this._booking.reduce((result,{ noches, pax, desayuno }) => {
            result += this._RoomPrice[0].price * noches;
            if (pax > 1)  
                result += 40 * (pax -1);

            if (desayuno)
                result += 15 * pax;

            return result;
        },0);
    }

    CalculateTotal () { this._totalPrice = ((this._subtotal * this._iva) - ((this._subtotal * this._iva)*0.15)).toFixed(2) }
}

//Clase cliente normal hija de hotelPrice que contiene los métodos para calcular el total y subtotal con las condiciones estandar
class normalClient extends hotePrice {

    super ([{type: "standard", price : 100}, {type: "suite", price : 150}])

    CalculateSubtotal() {
        this._subtotal =  this._booking.reduce((result,{tipoHabitacion, noches, pax, desayuno}) => {
             switch (tipoHabitacion) {
                 case "standard":
                     result += this._RoomPrice[0].price * noches;
                     break;
                 case "suite":
                     result += this._RoomPrice[1].price * noches;
                     break;
                }
             
             if (pax > 1)  
                 result += 40 * (pax -1);
 
             if (desayuno)
                 result += 15 * pax;
             
             return result
         },0);
     }
 
     CalculateTotal () { this._totalPrice = (this._subtotal * this._iva).toFixed(2) }

 }

 export { hotePrice, tourOperator, normalClient };


 //[{type: "standard", price : 100}, {type: "suite", price : 100}]

//[{type: "standard", price : 100}, {type: "suite", price : 150}]