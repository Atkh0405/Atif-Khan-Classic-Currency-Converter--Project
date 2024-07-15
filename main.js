import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'Atif Ullah Khan - Currency Converter\n"));
// Define the list of es and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "jYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 278.16, // Pakistani Rupees
    // Add more currecies and their exchange rates here
};
// Promt the user to select curruncies to convert from end to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currecy to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
