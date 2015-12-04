
//LiveReload

var gulp = require('gulp'),
    browserSync = require("browser-sync").create(),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    minify = require('gulp-minify'),
    jshint = require('gulp-jshint');
 
 //take anything that ends with .styl
gulp.task('stylus', function() {
  gulp.src('demostyles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task ("serve", ["stylus"], function(){

	browserSync.init({
		server:"."
	});

gulp.watch("demostyles.styl",
	["stylus"]);
	gulp.watch("index.html").on("change",
	browserSync.reload);
});

//Compiles All JS into the dist folder
 
gulp.task('scripts', function() {
  return gulp.src('*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

//Minify All JS

 
gulp.task('compress', function() {
  gulp.src('*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});


