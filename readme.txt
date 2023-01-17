♦ Introduction
This project is a collection of end-to-end tests built with Cypress, it allows you to test the functionality of your web and web services application.

♦ Prerequisites
Before you begin, ensure you have installed the following on your system:

 Node.js
 Cypress
 
♦ Installation
To install the project, follow these steps:

1. Clone the repository by running the following command:
> git clone https://github.com/castrilloc/EjerciciosAutomationBaufest_CarlosCastrillo.git

2. Navigate to the project directory by running the following command:
> cd cypress-test-project

3. Install the project dependencies by running the following command:
> npm install

♦ Execution
To run the tests, follow these steps:

1. Start the development server of your web application.

2. Open a terminal and navigate to the project directory.

3. Run the Cypress tests by running the following command:
> npx cypress open

>>This command will open the Cypress Test Runner, 
where you can select and run the tests.

♦ Additional Commands
> npx cypress run - runs the tests in headless mode
> npx cypress run --record - runs the tests and records the results on 
the Cypress Dashboard

♦ Conclusion
This project provides a set of tests that can be used to test differents  
functionalities on the "https://www.demoblaze.com/index.html" 
webpage using Cypress. 

This TC's ensure that the web app and the web services are working as expected.

♦ Acknowledgments
- Cypress
- Cypress documentation
- Chai documentation
- Chai-json-schema documentation
- API testing

CYPRESS_RECORD_KEY be0ea563-09d3-477e-95e6-336881edb4f1
npx cypress run --record --key be0ea563-09d3-477e-95e6-336881edb4f1 -b chrome

Note: It's suggested use chrome to execute the CI

🖋 Author
Carlos Castrillo