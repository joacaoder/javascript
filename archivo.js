//lista de componentes (tambien esta en el HTML)

const productos = [
    { nombre: "teclado", precio: 3500 },
    { nombre: "monitor", precio: 17500 },
    { nombre: "mouse", precio: "Actualmente sin stock" },
    { nombre: "auricular", precio: 7800 },
    { nombre: "escritorio", precio: 25000 },
];

console.log(productos);

let catalogo = "";


while (catalogo != "s") {

    let catalogo = prompt("Ingresa el componente y te dire si hay stock con su respectivo precio. Presione 's' para salir");
    switch (catalogo) {
        case "s":
        case "S":
            break;
        case "Teclado":
        case "teclado":
            alert("Tenemos Teclado disponible a $3500");
            break;
        case "Monitor":
        case "monitor":
            alert("Tenemos Monitor disponible a $17.500");
            break;
        case "Mouse":
        case "mouse":
            alert("No tenemos Mouse disponible actualmente. Vuelve a intentarlo mas tarde");
            break;
        case "Auricular":
        case "auricular":
            alert("Tenemos Auricular disponible a $7800");
            break;
        case "Escritorio":
        case "escritorio":
            alert("Tenemos Escritorio disponible a $25.000");
            break;
        default:
            alert("No tenemos a la venta ese componente");
            break;
    }
    if (catalogo == "s") {
        break;
    }

}

productos.push({ nombre: "MousePad", precio: 1000 },);
console.log(productos);



//Simulador de CARRITO de tienda con condicionales ciclos y function.
let error = 0;
let componente = parseInt(prompt("Ingresa el precio del componente (-1 para salir)"));
let sumaComponentes = 0;
let precioFinal = 0;
while (componente != -1) {
    sumaComponentes = sumaComponentes + componente;//8+10=18    
    componente = parseInt(prompt("Ingresa el precio del componente (-1 para salir)"));
}

alert("El precio es de: " + sumaComponentes);

descuento();

while (error == 0) {
    let cuotas = parseInt(prompt("Elige la cantidad de cuotas en la que deseas abonar. Actualmente disponemos solamente de 6 y 12 cuotas sin interes"));
    if (cuotas == 6) {
        alert("Vas a abonar " + cuotas + " cuotas de $" + sumaComponentes / 6);
        error = 1;
    }

    else if (cuotas == 1) {
        alert("Vas a abonar " + cuotas + " cuota de $" + sumaComponentes);
        error = 1;
    }

    else if (cuotas == 12) {
        alert("Vas a abonar " + cuotas + " cuotas de $" + sumaComponentes / 12);
        error = 1;
    }

    else {
        alert("Ingresaste un valor incorrecto");
    }
}






function descuento() {
    if (sumaComponentes >= 20000) {
        sumaComponentes = sumaComponentes * 0.75;
        alert("Debido a que  tu compra tiene un precio igual o mayor a $20000, tienes un descuento del 25%. El precio final a abonar es de $" + sumaComponentes);
    }
}










