const arg= process.argv[2];
const num= number(arg);
if (isNaN(num)) {
  console.log("Not a number");
}else {
  console.log(`My number: ${num}`);
}