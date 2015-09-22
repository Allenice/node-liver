module.exports = function(grunt) {
  var args = require('yargs').argv;
  var exts = ['js', 'css', 'html'];
  var paths = args.path;
  var fileList = [];
  var port;

  if(args.port) {
    port = args.port;
  }

  paths.forEach(function(item) {
    exts.forEach(function(ext) {
      fileList.push(item + '**/*.' + ext);
    });
  });

  console.log(fileList);

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