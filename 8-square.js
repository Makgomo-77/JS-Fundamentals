// Get the size of the square from command line arguments
const size = parseInt(process.argv[2]);

// Validate input
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
    process.exit(1); // Exit script if input is invalid
}

// Generate and print the square
for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
}
    
