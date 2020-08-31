// Constantes horarias
const workHours = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos del equipo
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];


//Función para asignar la disponibilidad de cada trabajador de manera aleatoria
var randomAvailability = ()  => {
      for (i=0;i<myTeam.length;i++) {                                               //se recorre el equipo entero
         for  (let x=0; x<myTeam[i].availability.length; x++) {                     // y por cada miembro del equipo todas las franjas horarias
            myTeam[i].availability[x] = Math.round(Math.random()) ? true : false;   // se le asigna un valor aleatorio de disponibilidad a dicha franja de cada miembro del equipo
          }   
      }
  }


//Función que muestra por consola cada trabajador así como su disponibilidad horaria
var showAvailability = () => {
    for (i=0;i<myTeam.length;i++) {                                     //recorremos todo el equipo
        console.log ("Disponibilidad de: ", myTeam[i].name);            //Mostramos por consola el monbre del mienbrop del equipo
        for (let x=0 ;x<myTeam[i].availability.length; x++) {           //recorremos las franjas horarias
            console.log (workHours[x],": ", myTeam[i].availability[x]); // y mostramos la franja y la disponibilidad de dicho miembro
        }
    } 
}  


//Función que muestra las franjas horarias disponibles para todo el equipo
var teamAvailability =() => {
    let availability= true;                                         //declaramos variable de disponibilidad y le damos valor inicial
    let findAvailability = false;                                   //declaramos variable de si hemos encontrado disponibilidad
    console.log ("----------Huecos disponibles:----------");        //Mostrmos por consola

    for (let i=0; i<workHours.length;i++) {                         //Recorremos todas las franjas horarias
        availability = true;                                        //Reinicializamos la disponibilidad a true en cada iteración de franja horaria
        for (let x=0; x<myTeam.length; x++) {                       //Recorremos cada miembro del equipo
           availability= availability && myTeam[x].availability[i]; //Comprobamos si la disponibilidad de cada miembro en cada franja horaria es TRUE (true && true =true, en otro caso es false)
        }
        if (availability===true) {                                  //Si se ha encontrado una franja horaria en la que todos esten disponibles
            console.log ("Hueco encontrado a las ", workHours[i]);  // Se muestra por consola dicha franja horaria
            findAvailability= true;                                 //y se le da true a la variable que indica que hemos encontrado al menos una franja horaria
        } 
    }
    if (!findAvailability){                                                 //Si no encontramos ninguna franja horaria
        console.log ("Lo sentimos no hay hueco disponible en el equipo");   //Lo indicamos por consola
    }
}


//Llamadas a las funciones
 randomAvailability ();
 showAvailability ();
 teamAvailability ();