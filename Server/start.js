//  needed to babelify ES6 so as to use Imports instead of require
// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.

// https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/ : got from here

require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Import the rest of our application.
  module.exports = require('./nodeserver.js')
  