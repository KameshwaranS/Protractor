
describe('Protractor Typescript Demo', function() {
	
	browser.ignoreSynchronization = true; // for non-angular websites
	
	it('CSV File Operations', function() {

		const papa = require('papaparse');
		const fs = require('fs');

		const file = fs.readFileSync('D:InputSheet.csv', 'utf8');
		let results = papa.parse(file, {
			header: true
		});
		console.log(results.data["meta"])

		// get first row
		let firstRow = results.data[0]
		console.log(results)
		console.log("URL : "+firstRow["URL"])
		console.log("NAME_LOCATOR : "+firstRow["NAME_LOCATOR"])
		console.log("SERACH_TERM : "+firstRow["SEARCH_TERM"])
		browser.get("https://"+firstRow["URL"]+".com");
		element(by.name(firstRow["NAME_LOCATOR"])).sendKeys(firstRow["SEARCH_TERM"])
	})
})