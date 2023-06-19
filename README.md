# Student-Registration-Form
Student Registration Form created with HTML/CSS, using the dependencies Mysql2 and Express from Node.js and MySQL.

This project was created with the purpose of integrating front-end technologies with a relational database, using HTML for input commands and Node.js for creating a web server and executing SQL queries. In this project, I learned to:

* Use the package manager of Node.js.

* Establish a connection to a database and a Node server using Mysql2.
Handle HTTP requests and methods for form submissions.

* Manage routes, use middleware for formatting HTTP request content, and securely execute SQL queries with Express.js.

## Installation:
Install Node.js according to your machine and requirements:
https://nodejs.org/en/download

Install WAMP (or XAMPP if you are not a Windows user) to have access to MYSQL and PHPMyAdmin for a more accessible interaction with the database:
WAMP: https://www.wampserver.com/en/download-wampserver-64bits/#
XAMPP: https://www.apachefriends.org/download.html

After installing Node, in an IDE or directly in the terminal, execute the following code to install the Mysql2 and Express dependencies:
npm install

If a terminal is used to install the packages, it is necessary to select the root directory of the project so that the package.json is read, and thus, the necessary dependencies are detected and installed.

## Accessing the project:

After following the installation steps, start WAMP or XAMPP to activate the MySQL server. Then, create the database in the terminal or through PhpMyAdmin using the cadastroalunos.sql file.

With the database created and MySQL started, you need to execute the following command in the terminal/project directory:

`npm start`

This will start the Node server, which will begin receiving HTTP requests from the form.

Once done, simply open the index.html file in a browser, enter the information, and press the submit button. If all steps have been performed correctly, you will see the message "registration created successfully," and the database will have a new entry with the inserted information.
