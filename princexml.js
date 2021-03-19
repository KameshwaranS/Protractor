const { browser, element } = require("protractor")

describe('TestSuite2', function()
{
    browser.ignoreSynchronization = true;
function Sample()
{
    element(by.linkText("Samples")).click();
    element(by.css("div[class='content1150'] h1")).getText().then(function(text){
        console.log(text);
        element(by.linkText("http://css4.pub/2015/icelandic/dictionary.pdf")).click();
    })
}
beforeEach(function()
{
    //browser.get("https://www.princexml.com/");
    browser.get("https://www.flatironssolutions.com/resources/");
})
it('Testcase2', function(){
    Sample();
})

})