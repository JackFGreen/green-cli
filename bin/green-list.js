#!/usr/bin/env node

var repos = require('../lib/repos')

repos((info) => {
    info.forEach(function(r) {
        console.log('')
        console.log('Templates:')
        console.log('')
        console.log(' ★ ' + r.name + ' - ' + r.description)
        console.log('')
    }, this);
})
