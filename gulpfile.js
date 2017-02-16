var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    awspublish   = require("gulp-awspublish"),
    del          = require("del"),
    parallelize = require("concurrent-transform")

// Compile SCSS files to CSS
gulp.task("scss", function () {
    del(["themes/iammatthias_v2/static/css/**/*"])
    gulp.src("themes/iammatthias_v2/src/css/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(hash())
        .pipe(gulp.dest("themes/iammatthias_v2/static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("themes/iammatthias_v2/data/css"))
})

// Hash javascript
gulp.task("js", function () {
    del(["themes/iammatthias_v2/static/js/**/*"])
    gulp.src("themes/iammatthias_v2/src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("themes/iammatthias_v2/static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("themes/iammatthias_v2/data/js"))
})

// Hash assets
gulp.task("assets", function () {
    del(["themes/iammatthias_v2/static/assets/**/*"])
    gulp.src(['themes/iammatthias_v2/src/assets/**/*'])
        .pipe(gulp.dest("themes/iammatthias_v2/static/assets"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "js", "assets"], function () {
    gulp.watch("themes/iammatthias_v2/src/css/**/*", ["scss"])
    gulp.watch("themes/iammatthias_v2/src/js/**/*", ["js"])
    gulp.watch("themes/iammatthias_v2/src/assets/**/*", ["assets"])
})


// Publish to AWS S3
gulp.task('publish', function() {
  var publisher = awspublish.create({
    region: 'us-west-1',
    params: {
      Bucket: 'iammatthias.com'
    }
  });
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };
  return gulp.src('./public/**')
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headers), 250))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter({
      states: ['create', 'update', 'delete'] }));
});


gulp.task('default', ['scss', 'js', "assets", 'watch']);

gulp.task('build', ['scss', 'js', "assets"]);
