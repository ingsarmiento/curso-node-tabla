const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//Recibimos la base desde la consola

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then(result => console.log(result))
    .catch(err => console.log(err));

