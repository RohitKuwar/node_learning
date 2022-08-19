const fs = require("fs");

//reading file
fs.readFile('./docs/text.txt', (err, data) => {
  if(err) {
    console.log("error reading file:", err);
  }
  console.log('reading file...', data.toString());
});

//writing file
fs.writeFile('./docs/text11.txt', 'hello rohit', () => {
  console.log('new file has been created');
});

//creating directory/folder
if(!fs.existsSync('./assets')) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log("error directory:", err);
    }
    console.log("directory/folder has been created");
  });
};

//deleting file
if(fs.existsSync('./docs/text_delete.txt')) {
  fs.unlink("./docs/text_delete.txt", (err) => {
    if (err) {
      console.log("error directory:", err);
    }
    console.log("file has been deleted");
  });
};