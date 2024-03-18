const fs = require('fs');

// Specify the file path
const filePath = '/path/to/your/file.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // File content is available in the 'data' variable
    console.log(data);
});