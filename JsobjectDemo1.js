/**
 * http://usejsdoc.org/
 */
function  car()
{


this.firstinput=element(by.model("first"));

this.secondinput=element(by.model("second"));
this.goButton=element(by.id("gobutton"));
this.buttonClick=element(by.id("gobutton"));
this.result=element.all(by.repeater("result in memory"));
this.output=element(by.css("td:nth-child(3)"));
this.color="red";
this.engine="turbo";
this.brand="BMW";
this.search="by.css('input')";

this.getURL=function()
{

browser.get('http://juliemr.github.io/protractor-demo/');
};

};

  module.exports= new car();
 /* a.getModel();
  console.log(a.engine);*/





