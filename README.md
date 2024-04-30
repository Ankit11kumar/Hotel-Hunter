Prerequisites:
-> Make sure you have node and npm setup in your system.
-> Do the setup of backend project and run it on the desired port.

Steps to Run:
-Create a .env file in the root folder of your frontend project.

-Add the following to your .env
    PORT = 3001
    REACT_APP_API_BASE_URL = 'http://localhost:3000/api/v1' 
    // [3000 represents the port where your backend server is running, you can replace it with yours if different]

-Navigate to the root folder of your frontend project in the terminal.

-Run "npm install"

-Now you can run your project using "npm start"

-To run the test cases, use "npm test".