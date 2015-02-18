module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    cssmin:
      target:
        files: [
          expand: true
          cwd: 'assets/css'
          src: ['*.css', '!*.min.css']
          dest: 'assets/css'
          ext: '.min.css'
        ]

    concat:
      options:
        separator: ';'
      dist:
        src: ['assets/js/jquery-1.8.3.min.js', 'assets/js/bootstrap.js', 'assets/js/jquery.backstretch.min.js', 'assets/js/app.js'],
        dest: 'assets/js/<%= pkg.name %>.js'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> 8/\n'
      dist:
        files:
          'assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']

  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'default', ['cssmin', 'concat', 'uglify']
