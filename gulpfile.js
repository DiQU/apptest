var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-ruby-sass"),
  plumber = require("gulp-plumber");

// Scripts Task
// Uglifies
gulp.task("scripts", function() {
  return gulp.src("js/*.js")
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});
// Styles Task
//
gulp.task("styles", function() {
  return sass("scss/**/*.scss")
    .pipe(plumber())
    .on("error", sass.logError)
    .pipe(gulp.dest("css/"));
});

//  Watch Task
//  Watches
gulp.task("watch", function() {
  gulp.watch("js/*.js", ["scripts"]);
  gulp.watch("scss/**/*.scss", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);
