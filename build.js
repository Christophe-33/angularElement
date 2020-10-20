const fs =require('fs-extra');
const concat= require('concat');

(async function build (){
  const files=[
    './dist/angularElement/runtime.js',
    './dist/angularElement/polyfills.js',
    './dist/angularElement/main.js'
  ]
  await fs.ensureDir('elements');
  await concat(files,'elements/social-button.js');
  await fs.copyFile('./dist/angularElement/styles.css','elements/styles.css');
})()
