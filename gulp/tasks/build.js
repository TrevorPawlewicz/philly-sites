var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var del          = require('del'); // for gulp to delete stuff
var usemin       = require('gulp-usemin');
var rev          = require('gulp-rev');
var cssnano      = require('gulp-cssnano');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync').create(); // only import create func
//-----------------------------------------------------------------------------

gulp.task('previewDist', function(){
    // syncs out browser with our changes
    browserSync.init({
        notify: false, // alert statement on browser window
        server: {
            baseDir: "dist" // directory our index.html lives
        }
    });
});

// delete old files
gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

//
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!.app/temp',
        '!./app/temp/**'
    ];

    return gulp.src(pathsToCopy)
            .pipe(gulp.dest('./dist/assets/images'));
});

// compress images:
gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
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
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
            .pipe(usemin({
                css: [function() {return rev()}, function() {return cssnano()}],
                js: [function() {return rev()}, function() {return uglify()}]
            }))
            .pipe(gulp.dest("./dist"));
});

// run ALL tasks:
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);
