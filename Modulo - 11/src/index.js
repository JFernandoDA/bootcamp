import * as Data from "./data";
import * as Classes from "./class"

const bookings = new Classes.normalClient(); 

bookings.booking = Data.reservas;

console.log("El subtotal para un cliente normal es: ",bookings.subtotal, "€");
console.log("El precio incluyendo el 10% de IVA es de: ",bookings._totalPrice,"€");



const tourOperatorBooking = new Classes.tourOperator();
tourOperatorBooking.booking = Data.reservas;


console.log("El subtotal a precio TourOperador es de: ",tourOperatorBooking.subtotal,"€");
console.log("El total con el IVA y el 15% de descuento al tour oprador es de:",tourOperatorBooking.total,"€");


