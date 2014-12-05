var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


var app = {
    src: './src',
    scss: './src/styles/**/*.scss',
    js: './src/app/**/*.js'
};


gulp.task('sass', function() {
    return gulp.src(app.scss)
        .pipe(sass())
        .pipe(gulp.dest(app.src + '/styles'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('js', function() {
    return gulp.src(app.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});



gulp.task('develop', function() {

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './src'
        }
    });
});

gulp.task('build', []);

gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch(app.scss, ['sass']);
    gulp.watch(app.js, ['js', reload])
});