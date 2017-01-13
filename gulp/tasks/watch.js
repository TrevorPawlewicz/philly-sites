var gulp         = require('gulp');
var watch        = require('gulp-watch');
var browserSync  = require('browser-sync').create(); // only import create func
//----------------------------------------------------------------------------

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

    // javascript changes:
    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefesh');
    });
});

//                     run denpendencies before func
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('app/temp/styles/styles.css').pipe(browserSync.stream());
});

gulp.task('scriptsRefesh', ['scripts'], function(){
    browserSync.reload();
});
