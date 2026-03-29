//* EJERCICIO 03
const preciosProdNeto = [10000, 25000, 39800, 44000, 59500, 75000, 89000, 128000, 175000, 209000];

const preciosConIVA = preciosProdNeto.map(precio => precio * 1.21);

const formatoPesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS"
});

console.log(
  preciosConIVA.map(valor => `El precio es: ${formatoPesos.format(valor)}.- IVA incluido.`)
);
