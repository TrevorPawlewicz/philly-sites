var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var del      = require('del'); // for gulp to delete stuff
var usemin   = require('gulp-usemin');
//-----------------------------------------------------------------------------


// delete old files
gulp.task('deleteDistFolder', function(){
    return del("./dist");
});


// compress images:
gulp.task('optimizeImages', function() {
    return gulp.src(['./app/assets/images/**/*',
                    '!./app/assets/images/icons',
                    '!./app/assets/images/icons/**/*'])
            .pipe(imagemin({
                progressive: true,
                interlaced: true,
                multipass: true
            }))
            .pipe(gulp.dest('./dist/assets/images'));
});


//
gulp.task('usemin', ['deleteDistFolder'], function(){
    return gulp.src("./app/index.html")
            .pipe(usemin())
            .pipe(gulp.dest("./dist"));
});


gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
