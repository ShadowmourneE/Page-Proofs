var gulp = require('gulp'),//подключаем gulp
    sass = require('gulp-sass');//подключаем sass пакет
gulp.task('sass',function(){
    return gulp.src(['sass/**/*.sass','sass/**/*.scss'])//берем источник
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('css'))
});
gulp.task('watch',function(){
    gulp.watch(['sass/**/*.sass','sass/**/*.scss'],['sass']);//наблюдение за sass файлами в папке sass
});
gulp.task('default', ['watch']);