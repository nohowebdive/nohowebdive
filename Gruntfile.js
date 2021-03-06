module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['sass']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }        
      }
    },

    copy: {
      scripts: {
        expand: true,
        cwd: 'components/jquery/dist/',
        src: 'jquery.min.js',
        dest: 'js'
      }
    },

    uglify: {
      dist: {
        files: {
          'js/modernizr.min.js': ['components/modernizr/modernizr.js'],
          'js/jquery.fittext.min.js': ['components/fittext/jquery.fittext.js']
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/jquery.fittext.min.js'
        ],

        dest: 'js/app.js',
      },

    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['copy', 'uglify', 'concat', 'watch']);

}