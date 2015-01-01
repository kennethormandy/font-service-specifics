if(typeof document === 'undefined') {
  var chai = require('chai');
  var fontServiceSpecifics = require('../src/index.js');
}

describe('checks against url', function(){
  it('should exist', function(){
    chai.assert.typeOf(fontServiceSpecifics, 'function', 'fontServiceSpecifics is a function');
  });
  it('should return “Google Fonts” when  a CDN URL is given', function(){
    chai.assert.equal(fontServiceSpecifics('https://fonts.googleapis.com'), 'Google Fonts');
  });
  it('should return “Google Fonts” when a Google Fonts CSS URL is given', function(){
    chai.assert.equal(fontServiceSpecifics('http://fonts.googleapis.com/css?family=Slabo+27px'), 'Google Fonts');
  });
  it('should return “Typotheque” when a Typotheque CSS URL is given', function(){
    chai.assert.equal(fontServiceSpecifics('http://fonts.typotheque.com/WF-023532-007173.css'), 'Typotheque');
  });
  it('should return “Fonts.com” when a Monotype Fonts.com CSS URL is given', function(){
    chai.assert.equal(fontServiceSpecifics('http://fast.fonts.net/cssapi/7492f661-79f4-4ab2-90f2-6a9eaf984a75.css'), 'Fonts.com');
  });
  it('should return “undefined” when site URL is given', function(){
    chai.assert.equal(fontServiceSpecifics('typotheque.com'), undefined);
  });
  it('should return “undefined” when made up CDN is given', function(){
    chai.assert.equal(fontServiceSpecifics('https://cdn.losttype.com/'), undefined);
  });
  it('should return “Fontdeck” when Fontdeck WOFF file is given', function(){
    chai.assert.equal(fontServiceSpecifics('http://f.fontdeck.com/f/1/VzNQMUcwQnAABJrWovDnJ37qcSCRR3btX+BPU/LFbCx0iZQHJh/khKzqRHFS3bthYlDr9P1krdNp3ZLADf4AQ/bxoasA3MX4t6AO6Swkr5E6xtqTUm0gz4lvhIWdbTB5hdDR3YYjt7FeeYSP8NH8TOEdrv7U/7tK4JQ8mHFupVD91j8DyXYu12rb7zqdBPVW7vX8fOdCLdF3NCBegZviTFz0/il4Se2cBnI.woff'), 'Fontdeck');
  });
});
