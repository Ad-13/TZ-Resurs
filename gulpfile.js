var gulp = require('gulp'),
		wiredep = require('wiredep').stream,
		useref = require('gulp-useref'),
		gulpif = require('gulp-if'),
		uglify = require('gulp-uglify'),
		clean = require('gulp-clean'),
		concatCss = require('gulp-concat-css'),
		sass = require('gulp-sass'),
		minifyCSS = require('gulp-minify-css'),
		autoprefixer = require('gulp-autoprefixer'),
		notify = require("gulp-notify"),
		connect = require('gulp-connect'),
		livereload = require('gulp-livereload');

// BOWER
gulp.task('bower', function () {
	gulp.src('./app/index.html')
		.pipe(wiredep({
			directory : "app/bower_components"
		}))
		.pipe(gulp.dest('./app'));
});

// SASS
gulp.task('sass', function () {
	return gulp.src('./app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
});

// CSS
gulp.task('css', function() {
	gulp.src('./app/css/*.css')
	.pipe(autoprefixer({
		browsers: ['last 10 versions', '>1%', 'ie 8', 'Firefox > 20'],
		cascade: false
	}))
	.pipe(connect.reload())
	.pipe(notify("Done!"));
});

// BUILD
gulp.task('build', ['clean'], function() {
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpif('*.css', minifyCSS()))
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulp.dest('dist'));
});

// CLEAN
gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});

// CONNECT
gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

// RELOAD
gulp.task('reload', function () {
	return gulp.src('./app/index.html')
	.pipe(connect.reload())
	.pipe(notify("Done!"));
});

// WATCH
gulp.task('watch', function() {
	gulp.watch('bower.json', ['bower']);
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/css/*.css', ['css']);
	gulp.watch('app/index.html', ['reload']);
	gulp.watch('app/js/*.js', ['reload']);
})

// DEFAULT
gulp.task('default', ['connect', 'watch']);