var fs = require('fs');

var readMyStream = fs.createReadStream(__dirname+'/readMe.txt','utf-8');
var writeMyStream = fs.createWriteStream(__dirname+'/write.txt');
readMyStream.on('data',function(chunk){
    console.log('chunks created...');
    writeMyStream.write(chunk);
    
});