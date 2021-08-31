var cantidadNumeros = prompt("Cuantos número quiere ingresar para saber cual es el mayor?");
var arrayNumeros = [cantidadNumeros];
parseInt(cantidadNumeros);

for (var i = 1;i <= cantidadNumeros; i++) {
    arrayNumeros[i - 1] = parseInt(prompt("Ingrese número:"));
}

var registro = 0;
parseInt(registro);

for (var i = 0;i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > registro) {
        registro = arrayNumeros[i];
    }
}

document.write("El número más grande de los ingresados es el ", registro);