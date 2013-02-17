var jenkins = require('../lib/jenkins'),
sys = require('util');
/*
module.exports['whenAnInvalidRequestIsMadeForJobsFromAJenkinsInstance'] = {
	thenAnExceptionIsRaised: function(test) {
		test.throws(function() {jenkins.getJobs(null, null)});
		test.throws(function() {jenkins.getJobs('', null)});
		test.done();
	}
};
*/
module.exports['whenARequestIsMadeForJobsFromAJenkinsInstance'] = {

	setUp: function(callback) {
		//this._testCallback = callback;
		sys.log('setUp start');
		jenkins.getJobs('http://www.ikasan.org/jenkins/', 
			function(data) {
				sys.log('setUp in callback');
				sys.log(data);
				this._jobs = data;
				callback();			
		});
		/* Setup not complete until _getJobsCallback is called */
		sys.log('setUp end');
	},
	tearDown: function(callback) {
		// clean up
		callback();
	},
	thenTheListOfJobsReturnedIsNotEmpty: function(test) {
		sys.log('in test');
		sys.log(this._jobs);
		test.ok(this._jobs.length>0);
		test.done();
	}
/*
	,
	thenTheNameOfEachJobReturnedIsNotNull: function(test) {
		for(var i=0;i<this._jobs.length;i++)
		{
			test.ok(this._jobs[i].name != null);
		}
		test.done();
	},
	thenTheNameOfEachJobReturnedIsNotEmpty: function(test) {
		for(var i=0;i<this._jobs.length;i++)
		{
			test.ok(this._jobs[i].name.length>0);
		}
		test.done();
	}	
	*/
};