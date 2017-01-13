var gulp    = require('gulp');
var webpack = require('webpack');


gulp.task('scripts', function(callback) {
    //  needs to be pointed to our config file, task:
    webpack(require('../../webpack.config.js'), function(err, stats){
        if (err) {
            console.log(err.toString());
        } else {
            console.log(stats.toString());
        }
        callback();
    });
});