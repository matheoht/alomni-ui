/* Copy "alomni-ui.css" from the "styles" folder to the "dist" folder once the first step of the build has been done by rollup */

const fs = require('fs');

fs.copyFile('./src/styles/alomni-ui.css', './dist/alomni-ui.css', (err) => {
  if (err) throw err;
  console.log('alomni-ui.css has been copied to dist folder successfully');
});
