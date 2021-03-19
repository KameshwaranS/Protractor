describe('Protractor baby steps',function() {  
	
	
	it('Open Angular js website',function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		//element(by.css("input[class='input-small ng-valid ng-touched ng-dirty']")).sendkeys("3");
		element(by.model("second")).sendKeys("3");
		element(by.id("gobutton")).click();
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");
		
			
		
		
	})

	
	
	
})





