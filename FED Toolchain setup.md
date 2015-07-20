## HTML5 Boilerplate Template
1) Begin by using HTML5 Boilerplate as a starter project template, 
  * download the template locall
  * add bash alias to copy that folder when starting a new project
  * e.g. $> 'html5-new PROJECTNAME' will create a folder named PROJECTNAME
      and will copy the contents of html5boilerplate into PROJECTNAME
      
## Frontend Toolchain Setup
#### Need NodeJS, npm, grunt
2) Then add the Frontend Toolchain using NPM and Grunt.
Assuming NPM and grunt-cli preinstalled on system.  If not, install them with:
```
```

##### npm init
Set up a package.json in your project ... 
This command will set one up after asking/prompting on several questions
about the project
```
$> npm init
```

##### grunt init
Setting up grunt-init:
```
$> npm install -g grunt-init
```

Copy the grunt-init-gruntfile template to ~/.grunt-init folder to add a grunt-init template for future use
```
$> mkdir ~/.grunt-init && cd $_
$> git clone https://github.com/gruntjs/grunt-init-gruntfile.git
```

## Grunt plugins for Toolchain

### JS

#### JS Plugins List
 * [ESLint](https://www.npmjs.com/package/grunt-eslint)
 * [JSCS.info](http://jscs.info/overview.html)
 * [JSCS - styleguide plugin](https://github.com/jscs-dev/grunt-jscs)
 * [JS Beautifier - plugin](https://github.com/vkadam/grunt-jsbeautifier)
 * 
 
#### ESLint
Add eslint to toolchain
Install eslint:
```
$> npm install -g eslint
```

If it's your first time using ESLint, you should set up a config file using --init:
```
$> eslint --init
```

Install the grunt-eslint hook, and save it to the packgage.json:
```
$> npm install eslint-grunt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('eslint-grunt');
```

ES-Lint Simplest configuration. Lint all of the JavaScript files in the project:
```
module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      all: ['**/*.js'],
      options: {
       config: "path/to/rules.json" 
    }
  });

  grunt.loadNpmTasks('eslint-grunt');
};
```
#### JSCS
Install plugin
```
npm install grunt-jscs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks("grunt-jscs");
```

#####Options
Any specified option will be passed through directly to JSCS, plus this plugin has additional options:

#####config
Defines how to externally load a JSCS configuration via the JSCS config loader. The following is the behavior of this option:

If set to a file path, then this file will be used;
If set to true, JSCS will use its default config loading behavior;
If set to true or to a file path with JSCS options specified in the grunt task, then they will be merged.
```
jscs: {
    src: "path/to/files/*.js",
    options: {
        config: ".jscsrc",
        esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        requireCurlyBraces: [ "if" ],
        //fix,
        //force,
        //reporter
        //reporterOutput
    }
}
```

#### JS Beautifier
Install
```
npm install grunt-jsbeautifier --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks("grunt-jsbeautifier");
```

##### Multi-task Example
```
"jsbeautifier" : {
    "default": {
        src : ["src/**/*.js"]
    },
    "git-pre-commit": {
        src : ["src/**/*.js"],
        options : {
            mode:"VERIFY_ONLY"
        }
    }
}
```

##### Config
 * files
 * src
 * options.mode (optional)
 * options.dest (optional)
 * options.config (optional)
 
##### Default options from js-beautify can be used
```
  "jsbeautifier": {
      files: ["src/**/*.js"],
      options: {
          config: "path/to/configFile",
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
```

##### Exclude files
All files from foo folder except bar.js
```
jsbeautifier: {
    files: ["foo/*.js", "!foo/bar.js"]
}
```

### CSS 
#### CSS Plugin List
 * [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint)
 * [CSS reformatter - Revizor](https://github.com/atrolov/grunt-revizor)
 * [Unused CSS - grunt-uncss](https://github.com/giakki/uncss)
 * [Unused CSS grunt-ucss](https://github.com/ullmark/grunt-ucss)
 * [Autoprefixer](autoprefixer)
 * [W3C/CSS Validation](https://github.com/mryvlin/grunt-w3c-validation)
 
#### CSS Lint
npm install grunt-contrib-csslint --save-dev
grunt.loadNpmTasks('grunt-contrib-csslint');
Run this task with the grunt csslint command.
##### Usage examples
```
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
}
```

#### CSS Revizor
Install
```
npm install grunt-revizor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('grunt-revizor');
```

Usage - Default Options
```
grunt.initConfig({
  revizor: {
    options: {},
    src: ['test/css/*.css', 'test/html/*.html', 'test/js/*.js']
  },
});
```
[... more options](https://github.com/atrolov/grunt-revizor#options)

#### W3C/CSS Validation
Install
```
npm install grunt-w3c-validation --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('grunt-w3c-validation');
```

And add to your task list using html-validation or css-validation:
```
grunt.registerTask("default", ["html-validation"]);
grunt.registerTask("default", ["css-validation"]);
```

##### The "*-validation" task - Overview
In your project's Gruntfile, add a section named html-validation or css-validation to the data object passed into grunt.initConfig().
```
html-validation: {
    options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
        remotePath: "http://decodize.com/",
        remoteFiles: ["html/moving-from-wordpress-to-octopress/",
                        "css/site-preloading-methods/"], //or
        remoteFiles: "validation-files.json", // JSON file contains array of page paths.
        relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
    },
    files: {
        src: ['<%= yeoman.app %>/*.html',
            '!<%= yeoman.app %>/index.html',
            '!<%= yeoman.app %>/modules.html',
            '!<%= yeoman.app %>/404.html']
    }
}

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
}
```
[... many more options](https://github.com/mryvlin/grunt-w3c-validation#options)

### HTML
#### HTML Plugin List
 * [HTML Validation](https://github.com/praveenvijayan/grunt-html-validation)
 * [HTML Linting](https://www.npmjs.com/package/grunt-htmllint)
 * [HTML Tidy](https://www.npmjs.com/package/grunt-htmltidy)
 * 
 
#### HTML Lint
###### Installing:
```
npm install grunt-htmllint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('grunt-htmllint');
```

###### The "htmllint" task - Overview
In your project's Gruntfile, add a section named htmllint to the data object passed into grunt.initConfig().
```
grunt.initConfig({
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
});
```
[... more options](https://www.npmjs.com/package/grunt-htmllint#options)

#### HTML Validation
Installation
```
npm install grunt-html-validation --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('grunt-html-validation');
```

And add to your task list using validation:
```
grunt.registerTask('default', ['validation']);
```

##### The "validation" task - Overview
In your project's Gruntfile, add a section named validation to the data object passed into grunt.initConfig().
```
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
}
```
[... many more options](https://github.com/praveenvijayan/grunt-html-validation#options)

#### HTMLTidy
###### Installing
npm install grunt-htmltidy --save-dev

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

grunt.loadNpmTasks('grunt-htmltidy');

###### The "htmltidy" task - Overview
~~Run this task with the grunt htmltidy command.~~

Example: In your project's Gruntfile, add a section named htmltidy to the data object passed into grunt.initConfig().
```
grunt.initConfig({
  htmltidy: {
    options: {
      // Task-specific options go here. 
    },
    your_target: {
      // Target-specific file lists and/or options go here. 
    },
  },
});
```

### Images
Image Optimization w/ImageMagick
grunt-image-resize -OR- grunt-contrib-imagemin

### Testing w/Jasmine
###### Installing
```
npm install grunt-contrib-jasmine --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```
grunt.loadNpmTasks('grunt-contrib-jasmine');
```

[... more options](https://github.com/gruntjs/grunt-contrib-jasmine#options)

###### Basic Use
``` 
// Example configuration
grunt.initConfig({
  jasmine: {
    pivotal: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  }
});
```
[... more options](https://github.com/gruntjs/grunt-contrib-jasmine#options)

### Utils
#### Utils Plugins Li
 * [Browsersync](grunt-browser-sync)
 * [Script/Link tags](https://github.com/andrewjmead/grunt-script-link-tags)
 * [static analysis reports w/plato - plugin](https://github.com/jsoverson/grunt-plato)
 * [code complexity plugin](https://github.com/vigetlabs/grunt-complexity)
 * [grunt-newer](https://www.npmjs.com/package/grunt-newer)
 * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
 * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
 * [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean)
 * [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy)
 * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
 * [Grunt Plugins Reviewed](http://cognition.happycog.com/article/grunt-plugins-reviewed)
 * [Lintspaces](https://www.npmjs.com/package/grunt-lintspaces)
 * [Leading indent](https://www.npmjs.com/package/grunt-leading-indent)
 * [Autoprefixer](https://www.npmjs.com/package/grunt-autoprefixer)
 * [Browserify](https://www.npmjs.com/package/grunt-browserify)
 * [Bower Task](https://www.npmjs.com/package/grunt-bower-task)
 * [Shell](https://www.npmjs.com/package/grunt-shell)
 * [Exec](https://www.npmjs.com/package/grunt-exec)
 * [Shell Spawn](https://www.npmjs.com/package/grunt-shell-spawn)
 * [Assemble Boilerplates](https://github.com/assemble/boilerplates)
 * [Grunticon](https://github.com/filamentgroup/grunticon)
 
#### BrowserSync
Install Browsersync utility first
```
npm install -g browser-sync
```

Install Browsersync plugin
```
npm install grunt-browser-sync --save-dev
```

Set up the task in Gruntfile.js
```
grunt.loadNpmTasks('grunt-browser-sync');
```
##### Usage Examples
###### Static File Server

The simplest example would be watching CSS files and using the built-in server for static HTML/CSS/JS files. This config alone will launch a mini-server (using your current working directory as the base), watch your CSS files for changes & auto-inject those changes into all connected browsers.
```
browserSync: {
    bsFiles: {
        src : 'assets/css/*.css'
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
}
```

###### Other watch tasks
Browser Sync is not a replacement for regular watch tasks (such as compiling SASS, LESS etc), they are designed to be used together. If you intend to do this, you'll need to set watchTask: true and be sure to call the watch task AFTER browserSync. For example, to compile SASS and then inject the CSS into all open browsers (without a page refresh), your config for all three tasks might look something like this:
```
// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
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
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
```

#### Tags - scripts/links - grunt-script-link-tags
#### Static analysis reports w/plato 
#### Code complexity 
#### File changes - grunt-newer
#### File changes - grunt-contrib-watch
#### Local server - grunt-contrib-connect
#### Clean (environment) - grunt-contrib-clean
#### Copy (files/folders) - grunt-contrib-copy
#### Concatenate (files) - grunt-contrib-concat

## Resources
 * [Essential Plugins for Grunt](http://ipestov.com/essential-plugins-for-grunt/)
 * [Adding Grunt to your Web Project](http://www.dhar.fr/blog/2012/10/28/adding-grunt-to-your-web-application-project/)
 * [Supercharging your Gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)
 * [Understanding the Real Advantages of ESLint](http://rangle.io/blog/understanding-the-real-advantages-of-using-eslint/)
 * [Configuring ESLint](http://eslint.org/docs/user-guide/configuring.html)
 * [Using Grunt w/CSS -- src/dest/build folders setup](http://blog.pamelafox.org/2012/05/using-gruntjs-with-css.html)
 * [Writing your Own Yeoman Generator](http://yeoman.io/authoring/index.html)
