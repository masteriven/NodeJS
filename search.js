
var path = require('path'), fs = require('fs');



var startPath = '../myapp';

var inputPath = process.argv[2];
var inputString = process.argv[3];



function fromDir (startPath,filter) {

	if(!fs.existsSync(startPath)){
		console.log("no dir",startPath);

		return;
}
			
	}	


	var files = fs.readdirSync(startPath);

		
	for(var i = 0; i<files.length ;i++){
		var filename = path.join(startPath,files[i]);
		var stat = fs.lstatSync(filename);

		var readFile = fs.readFileSync(filename, 'utf8');
		var readFileToString = readFile.toString().trim();


		if(startPath.isDirectory){
			fromDir(filename,filter);

		
		}
		if(readFileToString == inputString){
			console.log('founds' ,startPath + '/' + files[i]);
			
			
		}
		
	}

	if(readFileToString != inputString && inputString != null){
	console.log('No file was found');
	
	}


	 if(inputString == null && inputPath == null){
		console.log('USAGE: node search [EXT] [TEXT]');
	
	
};	

fromDir(startPath,inputPath);


 

 
