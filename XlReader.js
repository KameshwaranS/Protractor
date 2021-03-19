
var XLSX = require("xlsx");

class XlReader{
	
	read_from_excel(sheetName,filePath){
		
		var workbook = XLSX.readFile(filePath);
		var worksheet = workbook.Sheets[sheetName];
		
		return XLSX.utils.sheet_to_json(worksheet);
	}
}

module.exports = new XlReader;

