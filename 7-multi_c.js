const args=process.argv.slice(2);
const x=parseInt(args[0]);
if (isNaN(x)) {
  console.log("Missing number of occurrences");
}else {
    let y=0;
    while (y < x) {
        console.log("C is fun");
        y++;
    }
}