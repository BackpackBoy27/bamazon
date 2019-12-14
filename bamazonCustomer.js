const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon'
});

connection.connect(err => {
    if(err) console.log(err);
    console.log('connection success');
    connection.end();
});


// inquirer.prompt({
//     type: 'list',
//     message: 'Choose any of the following: ',
//     name: 'userchoices',
//     choices: ['Show all the products', 'Buy a product']
// }).then();