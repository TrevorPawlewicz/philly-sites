var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // expects an array.
var cssvars      = require('postcss-simple-vars'); // for CSS variables
var nested       = require('postcss-nested'); // nesting CSS
var cssImport    = require('postcss-import');
var mixins       = require('postcss-mixins');
var hexrgba      = require('postcss-hexrgba'); // converts rgba to hex to use variables
//----------------------------------------------------------------------------









// CSS task
gulp.task('styles', function(){

    return gulp.src('app/assets/styles/styles.css')
            .pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer]))
            .on('error', function(errorInfo) {
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('app/temp/styles'));
});
