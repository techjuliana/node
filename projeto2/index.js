const inquirer = require('inquirer')
const chalk = require('chalk')


inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual seu nome?',
    },
])
.then((resposta) =>{
    console.log(`Bem vindo(a) ${resposta.p1}`);
    inquirer.prompt([
        {
            name: 'p2',
            message: 'Qual sua idade?',
        },
    ]).then((resposta2) =>{
        if(resposta2.p2 >= 18){
            console.log(chalk.green(`${resposta.p1}, voce ja pode tirar sua CNH!`));
        }else{
            console.log(chalk.bgRed(`${resposta.p1}, voce ainda tem apenas ${resposta2.p2} anos, precisa esperar mais ${18-resposta2.p2} anos`));
        }
    })       
})