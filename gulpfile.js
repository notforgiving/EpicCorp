let project_folder = "dist";
let source_folder = "#src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/style.sass",
    js: source_folder + "/js/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,jpeg,ico,webp}",
    fonts: source_folder + "/fonts/**/*",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.sass",
    js: source_folder + "/js/**/*.js",
    fonts: source_folder + "/fonts/**/*",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,jpeg,ico,webp}",
  },
  clean: "./" + project_folder + "/",
};

let { dest, src }    = require("gulp"),
  gulp               = require("gulp"),
  browsersync        = require("browser-sync").create(),
  fileinclude        = require("gulp-file-include"),
  del                = require("del"),
  scss               = require("gulp-sass"),
  autoprefixer       = require("gulp-autoprefixer"),
  group_media        = require("gulp-group-css-media-queries"),
  cleanCSS           = require("gulp-clean-css"),
  rename             = require("gulp-rename"),
  uglify             = require("gulp-uglify-es").default,
  imagemin           = require("gulp-imagemin"),
  ttf2woff           = require("gulp-ttf2woff"),
  fontgen            = require("gulp-ttf2woff"),
  gcmq 				       = require('gulp-group-css-media-queries');
  webp               = require('gulp-webp');

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3000,
    notify: false,
    timestamps: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(group_media())
    .pipe(autoprefixer("last 10 versions"))
    .pipe(dest(path.build.css))
	.pipe(gcmq())
	.pipe(cleanCSS())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3,
        svgoPlugins: {
          removeViewBox: false,
        },
      })
    )
    .pipe(webp())
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fonts() {
  return src(path.src.fonts)
  .pipe(fontgen({
    dest: "./"+project_folder+"/"
  }))
  .pipe(dest(path.build.fonts));
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.fonts], fonts);
  gulp.watch([path.watch.img], images);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, js, html, images,fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
