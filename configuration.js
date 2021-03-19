const Reporter = require('jasmine-2-testrail')
const reporter = new Reporter({
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['princexml.js'],
  capabilities: {
	    browserName: 'chrome'
	  },
	  
	  onPrepare: () => {
		    jasmine.getEnv().addReporter(reporter);
		  },
		 
		  afterLaunch: () => {
		    // The first parameter is the project ID, and the second is the suite ID
		    reporter.createRun(1, 1, browser.params.runName)
		    // afterLaunch needs to return a promise in order
		    // to execute asynchronous code (used the most basic promise)
		    return new Promise(() => true)
		  }
};