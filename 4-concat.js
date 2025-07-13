if (process.argv.length !== 4) {
  console.log("Usage:node printArgs.js <arg1> <arg2>");
  process.exit(1);
}
const [, , arg1, arg2] =process.argv;
console.log(`${arg1} is ${arg2}`);
