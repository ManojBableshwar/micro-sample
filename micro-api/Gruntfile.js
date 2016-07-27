'use strict';

require('xunit-file');

module.exports = function (grunt) {
  grunt.initConfig({
    express: {
      test: {
        options: {
          script: 'api.app.js'
        }
      }
    },
   mochaTest: {
     test: {
       options: {
         reporter: 'spec-xunit-file'
       },
       src: ["./test.js"]
     }
   }
 });
 grunt.loadNpmTasks("grunt-express-server");
 grunt.loadNpmTasks("grunt-mocha-test");
 grunt.registerTask("default", ["express:test", "mochaTest"]);
};
