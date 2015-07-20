// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
      eslint: {
        all: ['**/*.js'],
        options: {
         config: "path/to/rules.json" 
      },
      jscs: {
        src: "path/to/files/*.js",
        options: {
          config: ".jscsrc",
          esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
          verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
          requireCurlyBraces: [ "if" ]//,
          //fix,
          //force,
          //reporter
          //reporterOutput
        }
      },
      "jsbeautifier": {
        files: ["src/**/*.js"],
        options: {
          config: "path/to/configFile",
          mode:"VERIFY_ONLY",
          html: {
            braceStyle: "collapse",
            indentChar: " ",
            indentScripts: "keep",
            indentSize: 4,
            maxPreserveNewlines: 10,
            preserveNewlines: true,
            unformatted: ["a", "sub", "sup", "b", "i", "u"],
            wrapLineLength: 0
          },
          css: {
            indentChar: " ",
            indentSize: 4
          },
          js: {
            braceStyle: "collapse",
            breakChainedMethods: false,
            e4x: false,
            evalCode: false,
            indentChar: " ",
            indentLevel: 0,
            indentSize: 4,
            indentWithTabs: false,
            jslintHappy: false,
            keepArrayIndentation: false,
            keepFunctionIndentation: false,
            maxPreserveNewlines: 10,
            preserveNewlines: true,
            spaceBeforeConditional: true,
            spaceInParen: false,
            unescapeStrings: false,
            wrapLineLength: 0,
            endWithNewline: true
          }
        }
      },
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        strict: {
          options: {
            import: 2
          },
          src: ['path/to/**/*.css']
        },
        lax: {
          options: {
            import: false
          },
          src: ['path/to/**/*.css']
        }
      },
      revizor: {
        options: {},
        src: ['test/css/*.css', 'test/html/*.html', 'test/js/*.js']
      },
      css-validation: {
        options: {
          reset: grunt.option('reset') || false,
          stoponerror:false,
          relaxerror: [],
          profile: 'css3', // possible profiles are: none, css1, css2, css21, css3, svg, svgbasic, svgtiny, mobile, atsc-tv, tv
          medium: 'all', // possible media are: all, aural, braille, embossed, handheld, print, projection, screen, tty, tv, presentation
          warnings: '0' // possible warnings are: 2 (all), 1 (normal), 0 (most important), no (no warnings)
        },
        files: {
          src: ['<%= yeoman.app %>/css/*.css']
        }
      },
      htmllint: {
        your_target: {
          options: {
            force: false,
            plugins: ['htmllint-plugin-name'],
            /* htmllint options go here */
          },
          src: [
            'path/to/yo/html_files'
          ]
        }
      },
      validation: {
        options: {
          reset: grunt.option('reset') || false,
          stoponerror: false,
          remotePath: 'http://decodize.com/',
          remoteFiles: ['html/moving-from-wordpress-to-octopress/',
                        'css/site-preloading-methods/'], //or
          remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
          relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
        },
        files: {
          src: ['<%= yeoman.app %>/*.html',
                '!<%= yeoman.app %>/index.html',
                '!<%= yeoman.app %>/modules.html',
                '!<%= yeoman.app %>/404.html']
        }
      },
      htmltidy: {
        options: {
          // Task-specific options go here. 
        },
        your_target: {
          // Target-specific file lists and/or options go here. 
        },
      },
      jasmine: {
        pivotal: {
          src: 'src/**/*.js',
          options: {
            specs: 'spec/*Spec.js',
            helpers: 'spec/*Helper.js'
          }
        }
      },
      watch: {
        files: 'app/scss/**/*.scss',
        tasks: ['sass']
      },
      browserSync: {
        dev: {
          bsFiles: {
            src : [
              'app/css/*.css',
              'app/*.html'
            ]
          },
          options: {
            watchTask: true,
            server: './app'
          }
        }
      }
    });

    // load npm tasks
    grunt.loadNpmTasks('eslint-grunt');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-revizor');
    grunt.loadNpmTasks('grunt-w3c-validation');
    grunt.loadNpmTasks('grunt-htmltidy');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask("js", ["eslint", "jscs", "jsbeautifier"]);
    grunt.registerTask("css", ["csslint", "css-validation", "revizor"]);
    grunt.registerTask("html", ["htmltidy", "validation", "htmllint"]);
    grunt.registerTask("test", ["jasmine"]);
    grunt.registerTask("live", ['browserSync', 'watch']);
    grunt.registerTask("default", ["js", "html", "css"]);
};