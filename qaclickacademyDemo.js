
describe('TestSuite',function()
{
    
    function selectItems(product)
	{
	element.all(by.tagName("app-card")).each(function(item)
			{
	            item.element(by.css("h4 a")).getText().then(function(text)
						{
							if(text=="Samsung Note 8")
							{
								item.element(By.css("button[class*='btn-info']")).click();
							}
						}) 
            })
	}
    function Login()
    {
        element(by.name("name")).sendKeys("Mystudents");
	    element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function()
                {
                    element(by.css("div[class*='success']")).getText().then(function(text)
                            {
                                console.log(text);
                            })
                })
    }
    function shoppingcart()
    {
        element(by.linkText("Shop")).click();
		selectItems("Samsung Note 8");
	    element(by.partialLinkText("Checkout")).getText().then(function(text)
				{
					var res=text.split("(");
					var x=Number(res[1].trim().charAt(0));
					expect(x).toBe(1);
				})
				
    }
    function CheckOut ()
    {
        element(by.partialLinkText("Checkout")).click()
        element.all(by.css("tr:nth-child(0)")).each(function(item)
        {
            item.element(by.css("td:nth-child(4)")).getText().then(function(text)
            {
                console.log(text);
            })
        })

    }
    beforeEach(function() {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
      });
    it('Testcase1', function(){

        Login();
        
        shoppingcart();

        CheckOut();



    })

})