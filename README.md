# Backend-Assignment
Customers of a restaurant can use the mobile application to order food. This mobile application uses a REST API backend to create orders. After  an order is created, a job is queued by the backend to process the order. The mobile application has a view to listing all the orders being placed

# Steps to run the project
1)Install node js  <br/><br/>
2)Open the command prompt and navigate to the project directory. Then run below commands <br/>
	npm init <br/>
	npm i express <br/>
	npm install express body-parser <br/><br/>
3)Then for generating documentation page, I used swagger. Run below command to install swagger <br/>
	npm i swagger-jsdoc swagger-ui-express <br/>
	document page url: http://localhost:8080/api/docs <br/><br/>
4)You can run app.js to see the endpoints working properly or not by running app.js. Run below command <br/>
	node app.js <br/>
	get url: http://localhost:8080/api/orders <br/>
	post url: http://localhost:8080/api/order <br/><br/>
5)Then for the unit testing, I used Mocha and Chai. Follow below steps to install and setup Mocha and Chai <br/>  	
	npm i mocha chai <br/>
	npm install request <br/>
	In the pachage.json,"scripts" can change this by typing in "test": "mocha" <br/>
	Finally,navigate to file directory called test then run below command to trigger the tests (unit_test.js) <br/>
	npm test <br/><br/>	
6)If you follow the steps application will run properly <br/><br/>
7)I have also attached output result screenshots with the project
