#!/usr/bin/env node

var path = require('path')
var shell = require('shelljs')

require('./env.js')

console.log('dirname: ' + __dirname)
console.log('process.env: ' + process.env.NODE_ENV)

// process.env.NODE_PATH = path.resolve(__dirname, './node_modules')
// console.log(process.env.NODE_PATH)

// // shell.touch('test.txt')
// var test = shell.cat('test.txt')
// console.log(test.stdout=='123\n')

/**
 * shell.rm
 */
// shell.rm('-rf', cwd('../dist/'))
// function cwd(dir) {
//     return path.resolve(__dirname, dir)
// }
// console.log(process.cwd())

shell.exec('git status')
console.log(shell.exec('git statu').code)
