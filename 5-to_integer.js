const arg = process.argv[2];
if (arg=== undefined || isNaN(Number(arg))) {
  console.log('Not a number');
}else {
  console.log('My number:',parseInt(arg));
}
