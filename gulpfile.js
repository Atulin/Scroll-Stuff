'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
sass.compiler = require('sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json')

//==========================================================================================//

gulp.task('css', function (){
    return gulp.src('src/css/**/*.sass')
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('watch:css', () => gulp.watch('src/**/*.sass', gulp.series('css')));

gulp.task('js', function () {
   return tsProject.src()
       .pipe(tsProject())
       .js
       .pipe(gulp.dest('dist/js'));
});
gulp.task('watch:js', () => gulp.watch(['src/**/*.ts'], gulp.series('js')));


//==========================================================================================//

gulp.task('all', gulp.parallel(['css', 'js']));
gulp.task('watch:all', gulp.parallel(['watch:css', 'watch:js']));

