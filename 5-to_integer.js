const arg= process.argv[2];
if (!isNaN(arg) && Number.isInteger(Number(arg))) {
  console.log(`My number:$ {parseInt(arg)}`);
}else {
  console.log('Not a number');
}
# My number:89
# My number:-454
