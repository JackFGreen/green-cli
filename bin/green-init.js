#!/usr/bin/env node

var path = require('path')
var program = require('commander')
var shell = require('shelljs')
var repos = require('../lib/repos')

program
    .usage('<template-name> [project name]')
    .parse(process.argv)

program.on('--help', () => {
    console.log('  Examples:')
    console.log('')
    console.log('    $ green init vue-multi my-project')
    console.log('')
})

if (program.args.length < 2) {
    program.help()
}


/**
 * create project
 */
var tplName = program.args[0]
var projectName = program.args[1]
var dir = pwd(projectName)

console.log('template: ' + tplName)
console.log('project: ' + projectName)
console.log('target: ' + dir)

repos((info)=>{
    var source = ''

    info.forEach(function(r) {
        r.name == tplName && (source = r.ssh_url)
    }, this);

    if (source) {
        console.log('source: ' + source)
        shell.exec('git clone ' + source + ' ' + dir)
        shell.rm('-rf', pwd(dir, '.git'))
    } else {
        console.log('')
        console.log('repository %s does not exist', tplName)
        console.log('')
    }
})

/**
 * pwd
 * @return current path
 */
function pwd(...name) {
    return path.resolve(process.cwd(), ...name || '')
}
