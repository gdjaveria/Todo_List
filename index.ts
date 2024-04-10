#! /usr/bin/env node      

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green('\n  welcome to todo list !!   \n'))

let todos_list: any[] = [];
let while_condition = true;
while(while_condition){
    
    let option = await inquirer.prompt([{
          name : 'user_option', 
         type: 'list', 
         message: chalk.bold.yellowBright( 'Select an options ?'),
         choices: ["Add Todo", "Remove Todo"]
    }]);

      if(option.user_option === "Add Todo"){
      let ans = await inquirer.prompt([{
        name: 'user_ans',
        type: 'input',
        message: chalk.bold.blue('Write something to add in the todos list ?'),
    }])
       if (ans.user_ans !== ''){
        todos_list.push(ans.user_ans);
        console.log(todos_list);
    } else{
        console.log('Please write something to add in todos list');
 }
}
        else if(option.user_option === "Remove Todo"){
        let removechoices =await inquirer.prompt([{
            type: 'list',
            name: 'remove_item',
            message: chalk.bold.red('Select item to remove'),
            choices: todos_list
    }])
        let index_to_remove = todos_list.indexOf(removechoices.remove_item)
        if(index_to_remove >= 0 ){
            todos_list.splice(index_to_remove, 1 );
            console.log('You removed :', removechoices.remove_item);
            console.log(todos_list);
        }
     }
       let user_ans = await inquirer.prompt([{
        type: 'confirm',
        name: 'selection',
        message: chalk.bold.gray('Do you want to continue?'),
        default : true
  }])
       if (user_ans.selection === false){
        while_condition = false;
       }
}
       console.log(`Thank you for using Todo list`)
