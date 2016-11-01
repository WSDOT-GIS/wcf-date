module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)
  grunt.initConfig({
    ts: {
      default: {
        options: { comments: true },
        tsconfig: true
      }
    },
    babel: {
      dist: {
        files: {
          'lib/wcf-date.js': 'es2015/wcf-date.js'
        }
      }
    },
    copy: {
      default: {
        nonNull: true,
        src: 'es2015/wcf-date.d.ts',
        dest: 'lib/wcf-date.d.ts'
      }
    },
    clean: {
      precompile: ['lib/**', 'es2015/**'],
      postcompile: ['es2015/*.d.ts']
    }
  })

  grunt.registerTask('default', ['clean:precompile', 'ts', 'babel', 'copy', 'clean:postcompile'])
}
