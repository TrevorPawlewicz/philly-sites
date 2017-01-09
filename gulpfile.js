var gulp         = require('gulp');
var watch        = require('gulp-watch');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // expects an array.
var cssvars      = require('postcss-simple-vars'); // for CSS variables
var nested       = require('postcss-nested'); // nesting CSS



gulp.task('default', function() {
    console.log("gulp task!");
});

gulp.task('html', function() {
    console.log('gulp is working on HTML!');
});

// CSS task
gulp.task('styles', function(){
            // source
    return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([nested, cssvars, autoprefixer]))
            .pipe(gulp.dest('./app/temp/styles'));
});



gulp.task('watch', function(){

    watch('./app/indext.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});
