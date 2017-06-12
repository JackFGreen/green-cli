#!/usr/bin/env node

require('commander')
    .version(require('../package.json').version)
    .usage('<command> [options]')
    .command('init', 'init a vue project')
    .parse(process.argv);
