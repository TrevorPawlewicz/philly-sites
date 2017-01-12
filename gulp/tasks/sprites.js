// purpose: for gulp to put all icon files into one file...

var gulp      = require('gulp');
var svgSprite = require('gulp-svg-sprite');
//----------------------------------------------------------------------------



var config = {
    mode: {
        css: {
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}











//         name you task, it's function
gulp.task('createSprite', function() {
    //
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));
});
