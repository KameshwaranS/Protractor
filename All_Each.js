
var xl = require('./XlReader.js');

describe('Protractor Element Demo',function() {
	
	var obj=  require("./JsobjectDemo1.js");
	var Test_Data = xl.read_from_excel('Add','./TestData.xlsx');
	
	function Add(a,b)
		{
			obj.firstinput.sendKeys(a);
			obj.secondinput.sendKeys(b);
			obj.buttonClick.click();

		}
	
		Test_Data.forEach(function(data){
		
			it('Locators',function() {
			
			obj.getURL();
			
			Add(data.A, data.B);

			element.all(by.repeater("result in memory")).each(function(item)
					{
				item.element(by.css("td:nth-child(3)")).getText().then(function(text)
						{

					console.log(text);
						})

					})

		})
		
	})
	


})

