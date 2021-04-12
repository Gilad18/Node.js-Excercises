const yargs = require("yargs");

yargs.command({
    command: 'add',
    describe: 'adding two variables',
    builder: {
        var1: {
            describe: 'value of first variable',
            demandOption: true,
            type: 'number'
        },
        var2: {
            describe: 'value of seconds variable',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.var1 + argv.var2)
    }
}
)

yargs.command({
    command: 'sub',
    describe: 'subscrat two variables',
    builder: {
        var1: {
            describe: 'value of first variable',
            demandOption: true,
            type: 'number'
        },
        var2: {
            describe: 'value of seconds variable',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.var1 - argv.var2)
    }
}
)

yargs.command({
    command: 'mult',
    describe: 'multiply two variables',
    builder: {
        var1: {
            describe: 'value of first variable',
            demandOption: true,
            type: 'number'
        },
        var2: {
            describe: 'value of seconds variable',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.var1 * argv.var2)
    }
}
)
yargs.command({
    command: 'pow',
    describe: 'pow of a variable',
    builder: {
        var1: {
            describe: 'value of a variable',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.var1 * argv.var1)
    }
}
)



console.log(yargs.argv)

