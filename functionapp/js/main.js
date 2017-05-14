//var remote = require('remote');
var dialog = require('electron').remote.dialog;
var fs = require('fs');
var $ = require('jquery');

$('#selectFile').click(function(){
  dialog.showOpenDialog(function (fileNames) {
      if(fileNames === undefined){
          console.log("No file was selected");
      }else{
          $("#actual-file").val = fileNames[0];
          readFile(fileNames[0]);
      }
  });
});

function readFile(filepath) {
    fs.readFile(filepath, 'utf-8', function (err, data) {
        if(err){
            console.log("An error occured while reading a file " + err.message);
            return;
        }
        detectFunctions(data);
        $("#show-content").html(data);
    });
}

function detectFunctions(data){

}
