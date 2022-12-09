// Primero, obtenemos la hora actual
const currentTime = new Date();

// Luego, creamos una fecha y hora para la próxima clase
const nextClassTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 17, 30, 0);


//Según el dia de la semana añadiremos mas dias para la proxima clase
//Domingo
if (currentTime.getDay() == 0 ){
    nextClassTime.setDate(nextClassTime.getDate() + 1);
    console.log("24h sumadas");
}
//Lunes
if (currentTime.getDay() == 1 && currentTime.getTime() > nextClassTime.getTime()){
    nextClassTime.setDate(nextClassTime.getDate() + 2);
    console.log("48h sumadas");
}
//Martes
if (currentTime.getDay() == 2 ){
    nextClassTime.setDate(nextClassTime.getDate() + 1);
    console.log("24h sumadas");
}
//Miercoles
if (currentTime.getDay() == 3 && currentTime.getTime() > nextClassTime.getTime()){
    nextClassTime.setDate(nextClassTime.getDate() + 2);
    console.log("48h sumadas");
}
//Jueves
if (currentTime.getDay() == 4 ){
    nextClassTime.setDate(nextClassTime.getDate() + 1);
    console.log("24h sumadas");
}
//Viernes
if (currentTime.getDay() == 5 && currentTime.getTime() > nextClassTime.getTime()){
    nextClassTime.setDate(nextClassTime.getDate() + 3);
    console.log("72h sumadas");
}
//Sabado
if (currentTime.getDay() == 6 ){
    nextClassTime.setDate(nextClassTime.getDate() + 2);
    console.log("48h sumadas");
}

// Calculamos el tiempo que falta hasta la próxima clase en milisegundos
let timeUntilNextClass = nextClassTime.getTime() - currentTime.getTime();

// Luego, usamos setTimeout para mostrar el tiempo restante en la consola después del tiempo calculado
// setTimeout(() => {
//   // Mostramos el tiempo restante en la consola aquí
//   console.log(`Time until next class: ${timeUntilNextClass / 1000} seconds`);
// }, timeUntilNextClass);

    const days = Math.floor(timeUntilNextClass / (1000 * 60 * 60 * 24));
    timeUntilNextClass -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(timeUntilNextClass / (1000 * 60 * 60));
    timeUntilNextClass -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(timeUntilNextClass / (1000 * 60));
    timeUntilNextClass -= minutes * (1000 * 60);
    const seconds = Math.floor(timeUntilNextClass / 1000);


console.log(`Faltan ${days} dias, ${hours} horas y ${minutes} minutes`);





// switch (diaSemana) {
//     case 0:
//         console.log("Hoy es Domingo");
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//         break;
//     case 1:
//         console.log("Hoy es Lunes");
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//         break;
//     case 2:
//         console.log("Hoy es Martes");
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
//         break;
//     case 3:
//         console.log("Hoy es Miercoles");
//       //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//         break;
//     case 4:
//         console.log("Hoy es Jueves");
//       //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//         break;
//     case 5:
//         console.log("Hoy es Viernes");
//       //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//         break;
//     case 6:
//         console.log("Hoy es Sabado");
//       //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//         break;
// }