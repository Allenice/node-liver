#!/usr/bin/env node

require('shelljs/global');
var path = require('path');

var args = require('yargs')
            .alias('p', 'port')
            .argv;


// 脚本执行路径
var execPath = pwd();

cd(__dirname);

// 转换为绝对路径
var paths = args._.map(function(item) {
  var p = path.isAbsolute(item) ? item : path.join(execPath, item);

  if(p && p[p.length - 1] != path.sep) p += path.sep;

  return p;
});

// 转换为命令行参数
var sArgs = '';
paths.forEach(function(item) {
  sArgs += ' --path ' + item;
});

// livereload 端口
if(typeof args.p != 'undefined' && Number.isInteger(args.p)) {
  sArgs += ' --port ' + args.p;
}

exec('grunt watch ' + sArgs);