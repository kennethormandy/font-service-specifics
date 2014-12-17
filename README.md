<!-- [![Font CDNs logo](http://placehold.it/1456x569)](https://github.com/kennethormandy/font-service-specifics)

***
-->

# Font Service Specifics

Look up a font’s service vendor, through its delivery URL.

## Getting started

If you’re using [Browserify](browserify.org), first install the project:

```sh
npm install --save font-service-specifics
```

Then, `require` it and do something based on the result.

```js
var fontServiceSpecifics = require('font-service-specifics');

console.log(fontServiceSpecifics('http://fonts.googleapis.com/css?family=Slabo+27px'));
// Returns “Google Fonts”

console.log(fontServiceSpecifics('fonts.typotheque.com'));
// Returns “Typotheque”
```

If you’re not using a module system, you can also drop in the [font-service-specifics.js](dist/font-service-specifics.js) file with a similar result:

```html
<script src="path/to/font-service-specifics.js"></script>
<script>
var service = fontServiceSpecifics('http://fast.fonts.net/cssapi/7492f661-79f4-4ab2-90f2-6a9eaf984a75.css');

console.log(service);
// Returns “Fonts.com”
</script>
```

In this case you’ll almost definitely want to include it with whatever other build process you’re using to include `font-service-specifics.js` in your main JavaScript file. Right now it is way larger (13kb) than it should be (<1kb), which I will be fixing.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Kenneth Ormandy](http://kennethormandy.com) & [Chloi Inc.](http://chloi.io)
