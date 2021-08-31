var distancia = prompt("Ingrese la distancia a recorrer:");
distancia = parseInt(distancia);

if (distancia <= 999) {
    document.write("Es conveniente que vayas a pie");
}
else if (distancia <= 9999) {
    document.write("Es conveniente que vayas en bicicleta");
}
else if (distancia <= 29999) {
    document.write("Es conveniente que vayas en colectivo");
}
else if (distancia <= 99999) {
    document.write("Es conveniente que vayas en auto");
}
else {
    document.write("Es conveniente que vayas en avión");
}