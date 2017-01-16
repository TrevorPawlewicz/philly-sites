// purpose: for gulp to put all icon files into one file...
var gulp      = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename    = require('gulp-rename');
var del       = require('del'); // to delete sprites
var svg2png   = require('gulp-svg2png'); //
//----------------------------------------------------------------------------
var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: function(){
                    return function(sprite, render){
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

// remove old sprites:
gulp.task('beginClean', function() {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// create the sprite:
//        name your task, task
gulp.task('createSprite', ['beginClean'], function() {
    //
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));
});

// create a PNG copy of the SVG
gulp.task('createPngCopy', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.svg')
            .pipe(svg2png())
            .pipe(gulp.dest('./app/temp/sprite/css'));
});

// copy the sprite graphics into our new folder:
//                              dependency (won't run until this is completed)
gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
    //
    return gulp.src('./app/temp/sprite/css/**/*.{svg, png}')
            .pipe(gulp.dest('./app/assets/images/sprites'));
});

// copy the sprite CSS into our folder structure:
gulp.task('copySpriteCSS', ['createSprite'], function() {
    //
    return gulp.src('./app/temp/sprite/css/*.css')
            .pipe(rename('_sprite.css'))
            .pipe(gulp.dest('./app/assets/styles/modules'));
});
// delete our temp files creted by gulp
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
    return del('./app/temp/sprite');
});

// run ALL these tasks...
gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
