// purpose: for gulp to put all icon files into one file...

var gulp      = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename    = require('gulp-rename');
//----------------------------------------------------------------------------


var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}


// create the sprite:
//        name your task, task
gulp.task('createSprite', function() {
    //
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));
});

//
gulp.task('copySpriteGraphic', ['createSprite'], function() {
    //
    return gulp.src('./app/temp/sprite/css/**/*.svg')
            .pipe(gulp.dest('./app/assets/images/sprites'));
});


// copy the sprite into our folder structure:
//                            dependency (won't run until this is completed)
gulp.task('copySpriteCSS', ['createSprite'], function() {
    //
    return gulp.src('./app/temp/sprite/css/*.css')
            .pipe(rename('_sprite.css'))
            .pipe(gulp.dest('./app/assets/styles/modules'));
});


// run ALL these tasks...
gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);
