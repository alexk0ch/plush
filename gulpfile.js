var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var jshint      = require('gulp-jshint');
var prefix      = require('gulp-autoprefixer');
var cssmin      = require('gulp-csso');
var sass        = require('gulp-ruby-sass');
var htmlmin     = require('gulp-minify-html');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync');
var stylish     = require('jshint-stylish');
var sourcemaps  = require('gulp-sourcemaps');
var scsslint    = require('gulp-scss-lint');
var uncss       = require('gulp-uncss');


// Set variables

var env,
    outputDir,
    sassStyle;

env = 'development';

if (env === 'development') {
    outputDir = 'app/';
    sassStyle = 'expanded';
} else {
    outputDir = 'dist/';
    sassStyle = 'compressed';
}

// Compile compass and sass  
gulp.task('sass', function() {
    return sass('./app/sass/', {require: ['susy', 'breakpoint']})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('app/css/'));
});

// delete unused css
gulp.task('uncss', function () {
    return gulp.src('app/css/*.css')
        .pipe(uncss({
            html: ['app/*.html']
        }))
        .pipe(gulp.dest('app/css/uncss'))
});

//move image folder in build folder
gulp.task('move', function() {
    return gulp.src('app/images/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('dist/images'));
});

// minify js files
gulp.task('uglify', function() {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// Lint scss
gulp.task('scss-lint', function() {
  gulp.src(['app/sass/modules/*.scss', 'app/sass/*.scss'])
    .pipe(scsslint());
});

// hinting and linting js files
gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//minify css files
gulp.task('cssmin', function() {
    return gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

//minify html files
gulp.task('htmlmin', function() {
    return gulp.src('app/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/'));
});

//init browser sync via live reloads
gulp.task('browser', function() {
    var files = [
        'app/css/**/*.css',
        'app/*.html',
        'app/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "app"
        }
    });
});

// watch file changes
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', ['sass', 'scss-lint']);
    gulp.watch('app/js/**/*.js', ['js']);

});

gulp.task('build', ['sass', 'js', 'htmlmin', 'cssmin', 'uglify', 'move']);

gulp.task('default', ['sass', 'js', 'watch', 'browser']);
