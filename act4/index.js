import PromptSync from "prompt-sync";
import chalk from "chalk";

const print = console.log;
const read = new PromptSync();

let temp = 0;
for (let i = 1; i < 6; i++) {
    temp += Number(read(chalk.green(`Enter input #${i}: `)));
}

print(`The mean is: ${temp / 5}`);



 

