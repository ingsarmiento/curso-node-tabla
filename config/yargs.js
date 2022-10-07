const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar.'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        description: 'Muestra la correspondiente tabla de multiplicar.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 12,
        describe: 'Indica hasta que número queremos multiplicar.'
    })
    .argv;

module.exports = argv;