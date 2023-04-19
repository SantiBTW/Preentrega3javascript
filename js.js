class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
  }
}
const producto1 = new Producto("Helado 1 kilo", 3500);
const producto2 = new Producto("Helado 1/2 Kilo", 2500);
const producto3 = new Producto("Helado 3/4 kilo", 3000);
const producto4 = new Producto("Helado 1/4", 1600);
const producto5 = new Producto("Frambuesas Chocolate (18u)", 3000);
const producto6 = new Producto("Torta Kinder", 6000);
const producto7 = new Producto("Postre Almendrado", 4000);
const producto8 = new Producto("Torta nutela", 6000);
const producto9 = new Producto("Pack 3 cucuruchos", 200);
const producto10 = new Producto("Pack 3 vasitos", 120);

const Productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
];

function generarMensaje(element, index, mensajeCompleto) {
  index = index + 1;
  let nuevoElemento = "";
  nuevoElemento = index + " " + element.nombre + " $" + element.precio + "\n";
  mensajeCompleto = mensajeCompleto + nuevoElemento;
  return mensajeCompleto;
}

let opcion;
const carritoDeCompras = [];

let saludo = alert("Bienvenido a Heladeria Sava");


let mensaje = "";

Productos.forEach((element, index) => {
  mensaje = generarMensaje(element, index, mensaje);
});

let cantidadDeProductosAIngresar = parseInt(
  prompt(
    "A continuación están los productos disponibles \n \n" +
      mensaje +
      "\n Elija la cantidad de articulos que desea comprar"
  )
);

for (let i = 1; i <= cantidadDeProductosAIngresar; i++) {
  let productoElegido = parseInt(
    prompt(
      "Ingrese el número correspondiente al artículo número " +
        i +
        "\n\n" +
        mensaje +
        "\n"
    )
  );
  carritoDeCompras.push(Productos[productoElegido - 1]);
}

let mensajeFinal = "";
let total = 0;

carritoDeCompras.forEach((element, index) => {
  mensajeFinal = generarMensaje(element, index, mensajeFinal);
  total += element.precio;
});

alert(
  "Elegiste los siguientes productos \n\n" +
    mensajeFinal +
    "\n\n" +
    "El total a pagar es " +
    total
);