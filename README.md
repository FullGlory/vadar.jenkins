vadar.jenkins
=============

Jenkins integration for the vadar service

Unit Tests
==========
To run unit tests;
 node test.js

API
===
List of exported functions:
 exports.getJobs = function(uri, callback)
 	uri 	 = address of jenkins server e.g. 'http://www.ikasan.org/jenkins/'
 	callback = client supplied callback function which is called with a single argument
 	           that contains an array of Job entities, that each have a name property
 	           that contains the name of the job

Dependencies
============
List of dependenct modules:
	util
	restler 	           
