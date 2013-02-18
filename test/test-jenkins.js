var jenkins = require('../lib/jenkins'),
	sys = require('util');

module.exports['whenAnInvalidRequestIsMadeForJobsFromAJenkinsInstance'] = {
	thenAnExceptionIsRaised: function(test) {
		test.throws(function() {jenkins.getJobs(null, null)});
		test.throws(function() {jenkins.getJobs('', null)});
		test.throws(function() {jenkins.getJobs('x', null)});
		test.done();
	}
};

module.exports['whenARequestIsMadeForJobsFromAJenkinsInstance'] = {

	setUp: function(callback) {
		// setup
		this.url = 'http://www.ikasan.org/jenkins/';

		callback();
	},
	tearDown: function(callback) {
		// clean up
		callback();
	},
	'thenTheListOfJobsReturnedIsNotEmpty' : function(test) {
		jenkins.getJobs(this.url, 
			function(jobList) {
				test.ok(jobList.length > 0);
				test.done();
		});
	},
	'thenTheNameOfEachJobReturnedIsNotNullOrEmpty' : function(test) {
		jenkins.getJobs(this.url, 
			function(jobList) {
				for(var i=0;i < jobList.length;i++)
				{
					test.ok(jobList[i].name != null);
					test.ok(jobList[i].name.length > 0);
				}
				test.done();
		});		
	}
};