const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    //Tabla de multiplicación del 

    try {
        console.log('***************************'.green);
        console.log(`*      Tabla del ${base}  *`.green);
        console.log('***************************'.green);

        let output = '';
        for (i = 1; i <= hasta; i++) {
            output += `${base} x ${i}  = ${base * i}`;

            if (i < hasta) {
                output += '\n';
            }

        }

        if (listar) {
            console.log(output.cyan);
        }


        fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, output);
        return `Archivo Tabla-del-${base}.txt creado correctamente!`.rainbow;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}