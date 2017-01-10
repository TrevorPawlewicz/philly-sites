var gulp         = require('gulp');
var watch        = require('gulp-watch');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // expects an array.
var cssvars      = require('postcss-simple-vars'); // for CSS variables
var nested       = require('postcss-nested'); // nesting CSS
var cssImport    = require('postcss-import');
var browserSync  = require('browser-sync').create(); // just import create func


gulp.task('default', function() {
    console.log("gulp task!");
});

gulp.task('html', function() {
    console.log('gulp is working on HTML!');
});



// CSS task
gulp.task('styles', function(){

    return gulp.src('app/assets/styles/styles.css')
            .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
            .pipe(gulp.dest('app/temp/styles'));
});



// type "gulp watch" in command line
gulp.task('watch', function(){
    // syncs out browser with our changes
    browserSync.init({
        notify: true, // alert statement on browser window
        server: {
            baseDir: "app" // directory our index.html lives
        }
    });

    // reload browser when there is a change to HTML file:
    watch('./app/index.html', function(){
        browserSync.reload();
    });

    // CSS changes made:
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject'); // call gulp.task 'cssInject'
    });
});


//                     run denpendencies before func
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('app/temp/styles/styles.css').pipe(browserSync.stream());
});
