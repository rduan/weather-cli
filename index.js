const minimist = require('minimist');

module.exports = () => {
  // console.log('welcome to the outside');
  const args = minimist(process.argv.slice(2));
  console.log(args);
}
