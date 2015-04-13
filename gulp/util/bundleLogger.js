var Gutil = require('gulp-util');
var PrettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function(filepath) {
    startTime = process.hrtime();
    Gutil.log('Bundling', Gutil.colors.green(filepath) + '...');
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = PrettyHrtime(taskTime);
    Gutil.log('Bundled', Gutil.colors.green(filepath), 'in', Gutil.colors.magenta(prettyTime));
  }
};
