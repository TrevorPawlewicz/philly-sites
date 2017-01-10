var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // expects an array.
var cssvars      = require('postcss-simple-vars'); // for CSS variables
var nested       = require('postcss-nested'); // nesting CSS
var cssImport    = require('postcss-import');
//----------------------------------------------------------------------------









// CSS task
gulp.task('styles', function(){

    return gulp.src('app/assets/styles/styles.css')
            .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
            .on('error', function(errorInfo) {
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('app/temp/styles'));
});
