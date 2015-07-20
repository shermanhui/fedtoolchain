
#### Here is a brief list of the steps/actions I expect will be present in most JavaScript web app builds. Of course, they will vary from project to project and by developer taste.

* Transcompiling JavaScript: CoffeeScript, Dart, Babel, Traceur etc.
* JavaScript Transforms: wrapping in modules or ng-annotate etc.
* Bundling/Concatenation: combining of scripts and styles into multiple files
* Minification: scripts, styles and html
* Source Maps: for both scripts and styles
* CSS Preprocessor: Less, Sass, Stylus etc.
* Style Transforms: Autoprefixer, PostCSS etc.
* Cache Busting: renaming files with a hash to prevent incorrect caching
* Image Optimization
* Compiling Templates: Mustache or HandlebarsJS, Underscore, EJS, Jade etc.
* Copying Assets: html, fav icon etc.
* Watching for Changes
* Incremental Rebuild
* Clean Build: deleting all files at start or preferably cleaning up files as needed
* Injecting References: generating script and style tags that reference the bundled files
* Build Configurations: separate Dev, Test and Prod configuration, for example to not minify html in dev build
* Serve: running a development web server
* Running Unit Tests
* Running JavaScript and CSS Linters: jshint, csslint etc.
* Dependencies: handle dependencies on npm and Bower packages, Browserfy etc.
*

#### Reference:
  * TBD - TODO: cite source article for this list
