import inquirer from "inquirer";

// PKR

let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0027,
        "PKR": 1,

    },

    //USD

    "USD": {
        "GBP": 0.83,
        "PKR": 277.57,
        "USD": 1,
    },

    // GBP

    "GBP": {
        "USD": 1.24,
        "PKR": 343.48,
        "GBP": 1,
    }
}

const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency ?"
    },

    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Conversion Currency ?"
    },

    {
        type:"number",
        name: "amount",
        message: "Enter Your Amount ?"
    }
])

const {from,to,amount} = answer;

if (from && to && amount) {
    let result = conversion[from][to] * amount;

    console.log(result);
}

    
