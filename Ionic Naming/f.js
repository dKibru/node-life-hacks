//https://www.quia.com/jg/825303list.html
var fs = require('fs');

var contents = fs.readFileSync('DATA.txt', 'utf8');
var stream = fs.createWriteStream("output.js");
var words = contents.split("\n");
stream.write("var listOfIonicCompounds = {\n");
for(var i=0;i<words.length;i++){
    var sent = words[i];
    var ele = sent.split("\t");
    var vv = ele[1].slice(0,ele[1].length-1);
    stream.write("\""+vv+"\":\""+ele[0]+ "\",\n");
    //console.log(vv+"??"+vv.length);
}
stream.write("}");
