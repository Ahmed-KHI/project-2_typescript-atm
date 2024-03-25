#! usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["FastCash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remainig = balance - EnteredAmount;
        console.log("Your remaining balance is ", remainig);
    }
    else {
        console.log("Insuficient Balance");
    }
}
