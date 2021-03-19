	const papa = require('papaparse');
	const fs = require('fs');
	const file = fs.readFileSync('D:CSV_TestData.csv', 'utf8');

	papa.parse(file, {
		complete: (result) =>{
			console.log(result.data)
			console.log(result.data[0])
			console.log(result.data[0][2])
		}
	});