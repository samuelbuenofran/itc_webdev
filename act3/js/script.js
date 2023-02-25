
const payroll = Number(prompt("What is your payroll amount?"));
const percentage = Number(prompt("How much do you want to increase your payroll by?"));

let newPayroll = payroll + (payroll * percentage / 100);

document.write("<strong>" + "Your new payroll is: " + newPayroll + "</strong>");