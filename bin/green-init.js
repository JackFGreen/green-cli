#!/usr/bin/env node

var path = require('path')
var program = require('commander')
var shell = require('shelljs')

program
    .usage('<options> [project name]')
    .option('-m, --multi', 'create a vue multi-page project')
    .option('-s, --single', 'create a vue single-page project')
    .parse(process.argv)


var repo = {
    'multi': {
        name: 'vue-multi/',
        url: 'git@github.com:JackFGreen/vue-multi.git'
    },
    'single': {
        name: 'vue-single/',
        url: 'git@github.com:JackFGreen/vue-single.git'
    }
}

/**
 * choose type
 */
if (program.multi) {
    log('type: multi')
    var type = 'multi'
} else if (program.single) {
    log('type: single')
    var type = 'single'
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
    var dir = pwd(projectName)
    var source = pwd(repo[type].name)

    log('create ' + projectName + ' to ' + pwd())
    log('path is ' + dir)

    shell.mkdir(dir)

    log('download ' + repo[type].name + ' from ' + repo[type].url)
    shell.exec('git clone ' + repo[type].url)

    log('copy ' + repo[type].name + ' to ' + projectName)
    shell.cp('-rf', source + '/*', dir)

    log('rm ' + repo[type].name)
    shell.rm('-rf', source)
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
