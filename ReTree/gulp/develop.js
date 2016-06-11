
var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var copy = require('gulp-copy');
var runSequence = require('run-sequence');

var paths = {
  sassFilesSrc: ['./src/scss/**/*.scss'],
  jsFilesSrc: ['./src/app/**/*.js'],
  cssFilesSrc:['.src/css/*.css'],
  cssFilesDest: './www/css/',
  indexFile: './www/index.html',
  injectFilesSrc: ['./www/app/**/*.js','./www/css/**/*.css'],
  injectFilesDest: './www',
  htmlFilesSrc : ['./src/app/**/*.html'],
  appDest : './www/app/',
  htmlIndexSrc : ['./src/index.html'],
  htmlIndexDest : './www/',
  //lib Folder
  libFolderSrc : ['./src/lib/**/*'],
  libFolderDest: './www/lib',
  //Img
  imgFilesSrc: ['./src/img/**/*'],
  imgFilesDest : './www/img',
};

/*General*/
gulp.task('copyIndex', function () {
  return gulp.src(paths.htmlIndexSrc)
    .pipe(gulp.dest(paths.htmlIndexDest));
});

gulp.task('copyIndexFiles', function() {
  return gulp.src(paths.htmlFilesSrc)
    .pipe(gulp.dest(paths.appDest));
});

gulp.task('copyJSFiles', function() {
  return gulp.src(paths.jsFilesSrc)
    .pipe(gulp.dest(paths.appDest));
});

gulp.task('copyCSSFiles', function() {
  return gulp.src(paths.cssFilesSrc)
    .pipe(gulp.dest(paths.cssFilesDest));
});

gulp.task('copyLibFolder', function () {
  return gulp.src(paths.libFolderSrc)
    .pipe(gulp.dest(paths.libFolderDest));
});

gulp.task('copyImg', function () {
  return gulp.src(paths.imgFilesSrc)
    .pipe(gulp.dest(paths.imgFilesDest));
});

gulp.task('inject', function () {
  var target = gulp.src(paths.indexFile)
  var sources = gulp.src(paths.injectFilesSrc, {read:false});


  return target.pipe(inject(sources, {relative: true, ignorePath:'www', addRootSlash: false}))
    .pipe(gulp.dest(paths.injectFilesDest));

    //var target = gulp.src('./www/index.html');

  //var sources = gulp.src(['./www/app/**/*.js', './www/css/**/*.css'], {read: false});

  //return target.pipe(inject(sources),{relative:true})
    //.pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
  var files = paths.sassFilesSrc.concat(paths.htmlFilesSrc).concat(paths.htmlIndexSrc);
  gulp.watch(files, ['depends']);
});

/*Development*/

gulp.task('sass', function (done) {
  gulp.src(paths.sassFilesSrc)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.cssFilesDest))
    .on('end', done);
});

gulp.task('default', function (callback) {
  runSequence (['copyIndex', 'copyIndexFiles', 'copyJSFiles', 'copyLibFolder', 'copyImg','sass'], 'inject');/*, 'sass'],'inject', 'watch');*/
});

gulp.task('depends', function (callback) {
  runSequence (['copyIndex', 'copyIndexFiles', 'copyJSFiles', 'copyLibFolder', 'sass'],'inject');
});
