//requireds //paquetes de node 
const fs = require("fs");
const colors = require("colors");

listarTabla = (base, limite) => {
    let data = "";

    for (i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n` //+ "\n";
    }
    console.log("=============".green);
    console.log(`Tabla de ${base}`.green);
    console.log("=============".green);
    console.log(data);
}

let craerArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = "";

        //Number verifica si es un numero el valor en base
        //tambien toma como valido un numero ingresado como string "5"
        if (!Number(base)) {
            throw new Error(`La base: ${base}, no es un numero`);
            /* reject(`La base: ${base}, no es un numero`);
            return; */
        }
        for (i = 1; i <= limite; i++) {
            /* let rpst = i * base;
            console.log(rpst); */

            //+= sirve para concatenar
            data += `${base} * ${i} = ${base*i}\n`; //+ "\n";

        }

        //fs ahce referencia al paquete requerido
        //fs.writeFile("El archivo que quiero crear","Contenido del archivo","callback de error");
        fs.writeFile(`./tablas/tabla-${base}-al-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-limite-${limite}.txt`.red)
            }
        });
    });
}

//funcion para exportar las funciones que ncesito
module.exports = {
    craerArchivo, //crearArchivo guarda el valor de la funcion crearArchivo---> es lo mismo que crearArchivo: crearArchivo
    listarTabla
}