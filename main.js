#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 9876;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pincode !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "Enter your amount",
                type: "number"
            },
        ]);
        mybalance -= amountAns.amount;
        console.log(`your remaining balance is ${mybalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${mybalance}`);
    }
}
else {
    console.log("Incorrect pincode!!!");
}
