/*! font-service-specifics v0.1.0 | MIT License | github.com/kennethormandy/font-service-specifics */

if(typeof document === 'undefined') {
  var url = require('url');
} else {
  var url = {
    parse: function(href) {
      hostname: {
        var parser = document.createElement('a');
        parser.href = href;
        console.log(parser.href);
        return parser;
      }
    }
  }
}

var urls = {
  'themes.googleusercontent.com': 'Google Fonts',
  'fonts.googleapis.com': 'Google Fonts',
  'cloud.typography.com': 'Cloud.typography',
  'fast.fonts.net': 'Fonts.com',
  'easy.myfonts.net': 'MyFonts',
  'use.typekit.net': 'Typekit',
  'fonts.typotheque.com': 'Typotheque',
  'f.fontdeck.com': 'Fontdeck'
};

module.exports = function(cdn) {
  var keys = Object.keys(urls)
  var key = keys.indexOf(url.parse(cdn).hostname);

  return urls[keys[key]] || undefined;
};
