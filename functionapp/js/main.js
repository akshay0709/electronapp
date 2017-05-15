//var remote = require('remote');
var dialog = require('electron').remote.dialog;
var fs = require('fs');
var $ = require('jquery');
var functionsList = [];

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
        $("#show-functions").empty();
        $("#show-content").empty();
        var displaytext = data.split('\n');
        //document.getElementById('show-content').innerText = data;
        for(var line = 0; line < displaytext.length; line++){

          var functionData = detectFunctions(displaytext[line]);
            if(null != functionData){
              var functionName = functionData[0].split(' ')[1].split('(');
              functionsList.push(functionName[0]);
            }
            var test = "<span id=\'"+ functionName[0] + "\'>" + displaytext[line]+ "</span>";
            $("#show-content").append(test).append("<br>");
        }
        for(var functionName = 0; functionName < functionsList.length; functionName++){
          var htmlContent = "<div data-function=\'"+functionsList[functionName]+"\' name='functionName'>"+functionsList[functionName]+"</div>";
          $("#show-functions").append(htmlContent).append("<br>");
        }
        $("div[name=functionName]").on('click', function(){
          var id = $(this).attr('data-function');
          var el = document.getElementById("show-content");
          var range = document.createRange();
          var sel = window.getSelection();
          range.setStart(el.querySelector("#"+id),1);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          el.focus();
        });
    });
}
function detectFunctions(data){
    return data.toString().match(/function\s.*?\(([^)]*)\)/);

}
function extractFunctions(functions){
    var functionName = functions[0].split(' ')[1].split('(');
    functionsList.push(functionName[0]);
}
