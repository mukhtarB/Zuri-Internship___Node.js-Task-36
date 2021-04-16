# Zuri Internship___Node.js Task 36
Using http module to fetch api and writing the api data into a file with the fs module.


## Process:
	- Importing http & fs modules through require method.
	- Calling get method on http & passing api url into it, then getting the response as arg to callback function.
	- Creating variable to hold incoming data.
	- Receive incoming data in chunks and then storing chunks in the variable created.
	- On completion of storing chunks write contents of the variable to a file using fs module.
	- Store file in a folder called "result" which was mannually created.
	- Check & display errors in writing files, if any.
	- Check & display errors in fetching api, if any.
	
## Learning resources:
	-Calling API:
		A twilio blog @ - https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
		A youtube explanation @ - https://youtu.be/MouZdENJddQ
	-Writing Files:
		Zuri's youtube explanation @ - https://www.youtube.com/watch?v=5GtteQs3YAQ