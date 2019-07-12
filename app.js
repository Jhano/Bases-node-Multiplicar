//destructurar el modulo para obtener solo la funcion y que no sea necesario hcaer multiplicar.crearArchivo
/* const multiplicar = require("./multiplicar/multiplicar") */
const { craerArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs"); //).argv -- si es que fuera sin destructuracion
const colors = require("colors");
//const colors = require("colors/safe");

/* const argv = require("yargs")
    //primer argumento: El comando que ejectua los demas comandos
    //segundo argumento: una ayuda a mostrar al usuario
    //tercer argumento un objeto, que recibe la configuracion de comandos o de flags, que ese comando puede recibir
    //npm app.js listar base crear limitar... etc
    .command("listar", "Imprime en consola la tabla de multiplicar", {
        base: {
            demand: true, //lo vuelve un comando obligatorio
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10 //valor por defecto, si es que el usuario no lo manda
        }
    })
    .command("crear", "Genera un archivo con la tabla de multiplicar", {
        base: {
            demand: true, //lo vuelve un comando obligatorio
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10 //valor por defecto, si es que el usuario no lo manda
        }
    })
    .help()
    .argv; //cierre del yargs  */

let argv2 = process.argv; //procces es un objeto de node //argv (un arreglo) contiene los argumentos

/* console.log(argv2);
console.log(argv); */

let comando = argv._[0]; //._ hace referencia al arrlego //_ es el nombre del arreglo

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        //sin esto let base = parametro.split("=")[1];
        //seria asi craerArchivo(base[1])
        craerArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo Creado: ${archivo}`); //console.log(`Archivo Creado:`, colors.red(archivo));
        }).catch(error => console.log(error))
        break;
    default:
        console.log("Comando no reconocido");
}
/*
let parametro = argv2[2]; //el [1] indica la posicion del arreglo que guarda
let base = parametro.split("=")[1]; //split separa elemento, convierte de un string a un arreglo
// y usa lo que va entre parentesis como punto de separacion
//console.log(base); */

/* multiplicar.craerArchivo(base).then(archivo => {
    console.log(`Archivo Creado: ${archivo}`);
}).catch(error => console.log(error)) */