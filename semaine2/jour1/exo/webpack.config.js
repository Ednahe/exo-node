const path = require('path');

module.exports = {
  entry: './public/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'jour1/exo/public/scripts'),
    filename: 'bundle.js'
  }
};