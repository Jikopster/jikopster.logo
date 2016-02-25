module.exports = function (grunt) {
  grunt.initConfig({
    pixar: {
      logo: {
        src: 'src/logo.json',
        dest: 'dist/logo.jade'
      }
    },
    less: {
      logo: {
          options: {
            strictUnits: true
          },
          src: 'src/logo.less',
          dest: 'dist/logo.css'
      }
    },
    cssmin: {
      logo: {
        src: 'dist/logo.css',
        dest: 'dist/logo.min.css'
      }
    },
    concat: {
      logo: {
        src: '{src,dist}/logo.jade',
        dest: 'dist/logo.jade'
      }
    },
    copy: {
      logo: {
        files: [
          {
            src: 'dist/logo.min.css',
            dest: 'public/logo.min.css'
          },
          {
            src: 'dist/logo.jade',
            dest: 'views/logo.jade'
          }
        ]
      }
    }
  })
  
  grunt.registerTask('logo', ['pixar:logo', 'less:logo', 'concat:logo', 'cssmin:logo', 'copy:logo'])
  
  grunt.registerTask('default', ['logo'])
  
  grunt.loadNpmTasks('grunt-pixar')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-concat')
}