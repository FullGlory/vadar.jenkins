var sys = require('util'),
    rest = require('restler');

exports.getJobs = function(uri, callback) {
	
	if (!uri || !isString(uri) || uri.length == 0) {
		throw new Error('Invalid URI specified');
	}

	if (!callback) {
		throw new Error('Invalid callback specified');
	}
	
	rest.get(uri + '/api/json?tree=jobs[name]').on('complete', function(data) {
		if (data instanceof Error) {
    		sys.puts('Error: ' + data.message);
      	} else {
	
			var jobs = new Array();
			for(var i=0;i<data.jobs.length;i++)
			{
				var job = new Object();
				job.name = data.jobs[i].name;
				jobs[i] = job;	
			}
	
			callback(jobs);
  		}

	});
};

function isString(o) {
    return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}