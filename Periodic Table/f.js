var fs = require('fs');

var contents = fs.readFileSync('DATA.txt', 'utf8');
var stream = fs.createWriteStream("output.js");
//var words = contents.split("/t");
//var words = contents.match(/\b(\w+)\b/g);
//var words = contents.replace(/(\s+)/, "====");
var words = contents.split("\n");
var nonmetal= [1,2,6,7,8,9,10,15,16,17,18,34,35,36,53,54,85,86,117,118];
var metalloid = [5,14,32,33,51,52];
for(var i=0;i<words.length;i++){
    var sent = words[i];
    var ele = sent.split("\t");
    
        //for(var j=0;j<ele.length;j++){
            stream.write("periodicTable.push({\n");
            stream.write("\"Z\":"+ele[0]+ ",\n");
            stream.write("\"Symbol\":\""+ele[1]+ "\",\n");
            stream.write("\"Element\":\""+ele[2]+ "\",\n");
            stream.write("\"Origin of name\":\""+ele[3]+ "\",\n");
            if(ele[4]!="")
                stream.write("\"Group\":"+ele[4]+ ",\n");
            else
                stream.write("\"Group\":\"\",\n");
            stream.write("\"Period\":"+ele[5]+ ",\n");

            var c = ele[6].replace(/[^\d.-]/g, '');
            c+="";
            stream.write("\"Atomic weight\":\""+c+ "\",\n");
            
            var v = Number(parseFloat(c).toFixed(0));
            stream.write("\"Mass number\":"+v+ ",\n");

            var d = ele[7].replace(/[^\d.-]/g, '');
            d+="";
            stream.write("\"Density\":\""+d+ "\",\n");
            var e = ele[8].replace(/[^\d.-]/g, '');
            e+="";
            stream.write("\"MP\":\""+e+ "\",\n");
            var f = ele[9].replace(/[^\d.-]/g, '');
            f+="";
            if(nonmetal.indexOf(parseInt(ele[0]))!=-1){
                stream.write("\"Property\":\"nonmetal\",\n");
            }else if(metalloid.indexOf(parseInt(ele[0]))!=-1){
                stream.write("\"Property\":\"metalloid\",\n");
            }else{
                stream.write("\"Property\":\"metal\",\n");
            }
            stream.write("\"BP\":\""+f+ "\",\n");
            stream.write("\"C\":\""+ele[10]+ "\",\n");
            stream.write("\"X\":\""+ele[11]+ "\"\n");

            
            //stream.write("\"Abundance\":\""+ele[12]+ "\",\n");
            stream.write("});\n");
}
