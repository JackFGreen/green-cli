#!/usr/bin/env node
var path = require('path')
var program = require('commander')
var shell = require('shelljs')

program
    .usage('<options> [project name]')
    .option('-m, --multi', 'create a vue multi-page project')
    .option('-s, --single', 'create a vue single-page project')
    .parse(process.argv)


/**
 * choose type
 */
if (program.multi) {
    log('type: multi')
} else if (program.single) {
    log('type: single')
} else {
    warning('choose a type to init')
    program.help()
}


/**
 * project name
 */
if (program.args.length < 1) {
    warning('enter a project name')
    program.help()
}

var projectName = program.args[0]
log('name: ' + projectName)

create()


/**
 * create project
 */
function create() {
    log('create ' + projectName + ' to ' + pwd())
    log('path is ' + pwd(projectName))

    shell.mkdir(pwd(projectName))
}

/**
 * pwd
 */
function pwd(name) {
    return path.join(shell.pwd().toString(), name || '')
}

/**
 * log
 */
function log(s) {
    console.log('\n====================\n' + s + '\n====================\n')
}
function warning(s) {
    console.log('\n==================== ' + s + ' ====================\n')
}
