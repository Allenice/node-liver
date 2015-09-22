module.exports = function(grunt) {
  var path = require('path');
  var args = require('yargs').argv;
  var exts = ['js', 'css', 'html'];
  var paths = Array.isArray(args.path) ? args.path : [args.path];
  var fileList = [];
  var port = true;

  if(args.port) {
    port = args.port;
  }

  console.log('livereload:', port);

  paths.forEach(function(item) {
    exts.forEach(function(ext) {
      fileList.push(item + '**'+ path.sep +'*.' + ext);
    });
  });

  console.log('watch: \n', fileList);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    watch: {
      options: {
        livereload: port
      },
      files: fileList,
    }

  });

  grunt.registerTask('default', ['watch']);

}