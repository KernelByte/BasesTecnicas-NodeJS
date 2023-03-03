function mensaje(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback();
    }, 1000);
}

console.log("Iniciando proceso....");
mensaje("Yoniher", function () { console.log("Finalizando proceso...."); });
