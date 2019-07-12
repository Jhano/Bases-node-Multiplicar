const opciones = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}

//lo de opciones funciona porque comparten la misma configuracion
const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opciones)
    .command("crear", "Genera un archivo con la tabla de multiplicar", opciones)
    .help()
    .argv; //cierre del yargs

//exporto un objeto que contiene la constante
module.exports = {
    argv
}