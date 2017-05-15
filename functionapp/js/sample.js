function readFile(filepath) {
        var displaytext = data.split('\n');
        //document.getElementById('show-content').innerText = data;
        for(var line = 0; line < displaytext.length; line++){
          $("#show-content").append(displaytext[line]).append("<br>");
          detectFunctions(displaytext[line]);
        }
    });
}
function detectFunctions(data){
    // var functions = functionExtractor.parse(data);
    // console.log(functions);
    var functions = data.toString().match(/function/g);
    console.log(functions);
}
function test(data){
    // var functions = functionExtractor.parse(data);
    // console.log(functions);
    var functions = data.toString().match(/function/g);
    console.log(functions);
}
