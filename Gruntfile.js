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
      },
      spec: {
        files: {
          'spec/SampleAlerts.js': 'spec/SampleAlerts.es6',
          'spec/wcf-dateSpec.js': 'spec/wcf-dateSpec.es6'
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
