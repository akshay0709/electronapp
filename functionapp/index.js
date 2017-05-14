const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell
// const test = require('electron').remote
// const dialog = test.dialog



let mainWindow;

app.on('ready', function(){
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //shell.showItemInFolder('C:users/nehatambe');
  //path.join(__dirname, 'main.js')
  //shell.openItem('C:users/nehatambe/package.json');
//   dialog.showOpenDialog((fileNames),function(){
//     // fileNames is an array that contains all the selected
//     if(fileNames === undefined){
//         console.log("No file selected");
//         return;
//     }
//
//     fs.readFile(filepath, 'utf-8', function(err, data){
//         if(err){
//             alert("An error ocurred reading the file :" + err.message);
//             return;
//         }
//
//         // Change how to handle the file content
//         console.log("The file content is : " + data);
//     });
// });

  mainWindow.on('closed', function(){
    win = null
  });

})
