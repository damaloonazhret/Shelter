const gulp = require('gulp'),
  sass = require('sass'),
  sass_gulp = require('gulp-sass')(sass),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  include = require('gulp-include');

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "build",
    }
  });
});


gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass_gulp({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('images', function () {
  return gulp.src('app/assets/**/*')
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest('build/assets'));
})

gulp.task('main-to-main', function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('pets-to-pets', function () {
  return gulp.src('app/pets/*.html')
    .pipe(gulp.dest('build/pets'))
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('css', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/animate.css/animate.css',
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({ stream: true }));
});


gulp.task('js-include', () => {
  return gulp.src('app/js/main.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest('build/js'));
})

gulp.task('js-pets', () => {
  return gulp.src('app/js/pets/main.js')
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest('build/js/pets'));
})

gulp.task('watch', function () {
  gulp.watch('app/assets**/*', gulp.parallel('images'));
  gulp.watch('app/*.html', gulp.parallel('main-to-main'));
  gulp.watch('app/pets/*.html', gulp.parallel('pets-to-pets'));
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/js/**/*.js', gulp.parallel('js-include', 'js-pets', 'script'));
});

gulp.task('default', gulp.parallel('css', 'scss', 'js-include', 'js-pets', 'main-to-main', 'pets-to-pets', 'images', 'browser-sync', 'watch',));