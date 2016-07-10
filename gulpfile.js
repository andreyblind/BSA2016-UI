var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
 
gulp.task('default', function () {
	return gulp.src('css/*.*')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('main.css'))
    	.pipe(gulp.dest('dist'));
});


gulp.task('scripts', function() {
  return gulp.src('dist/*.*')
   
});