var gulp = require('gulp'),//connected gulp
    sass = require('gulp-sass');//using sass pocket
gulp.task('sass',function(){
    return gulp.src(['sass/**/*.sass','sass/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('css'))
});
gulp.task('watch',function(){
    gulp.watch(['sass/**/*.sass','sass/**/*.scss'],['sass']);//watching the files in the css folder
});
gulp.task('default', ['watch']);