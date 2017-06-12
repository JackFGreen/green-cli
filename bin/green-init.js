#!/usr/bin/env node

var program = require('commander')
var shell = require('shelljs')

program
    .usage('<options>')
    .option('-m, --multi [name]', 'create a vue multi-page project with a project [name]', 'green')
    .option('-s, --single [name]', 'create a vue single-page project with a project [name]', 'green')
    .description('the default type is multi, the default name is green')
    .parse(process.argv)


// program.parse(process.argv)
// console.log(program.args)

// if (program.args.length < 1) program.help()


if (program.multi) {
    console.log('multi')
    console.log(program.multi)
} else if (program.single) {
    console.log('single')
    console.log(program.multi)
} else {
    console.log('please choose a project to init')
}

