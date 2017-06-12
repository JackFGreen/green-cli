#!/usr/bin/env node
var program = require('commander')

program
  .version('0.1.0')
  .usage('create vue project')
  .option('-m, --multi', 'create vue multi-page project')
  .option('-s, --single', 'create vue single-page project')
  .parse(process.argv);

