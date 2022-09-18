'use strict';
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
//gulp.task('nome-tarefa', função)
// origem -> gulp -> destino
// src    -> gulp -> dist
// .scss  -> gulp -> .css

// task('default', watchFunction)
// task('sass', compileSass)

function compileSass(){
   return gulp.src('src/SCSS/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
         // .pipe(autoprefixer({cascade: false}))
         .pipe(cssnano({ autoprefixer: {browsers: ['> 1%', 'last 2 versions'], add: true} }))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest('./dist/css'));
}
         
function watchFunction(){
   gulp.watch('src/scss/**/*.scss', compileSass);
   gulp.watch('src/images/**/*.*', images);
   gulp.watch('src/**/*.html', html);
   gulp.watch('src/js/**/*.js', js);
}

function html(){
   return gulp.src('./src/**/*.html')
      .pipe(gulp.dest('./dist'))
}

function images(){
   return gulp.src('./src/images/**/*.*')
      .pipe(gulp.dest('./dist/images'))
}

function clean(){
   return del('./dist/**/*')
}

function js(){
   // return gulp.src('./src/js/**/*.js') // Error na ordem dos arquivos
   return gulp.src(['./src/js/sum.js', './src/js/app.js'])
      .pipe(concat('all.js'))
      

      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
}
// exports.default = compileSass;
// exports.default = gulp.parallel(compileSass, html, images);
exports.default = gulp.series(clean, gulp.parallel(compileSass, html, images, watchFunction, js));
// exports.watch = watchFunction;