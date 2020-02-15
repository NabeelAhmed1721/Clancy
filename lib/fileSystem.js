const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

//console.log(process.cwd());

// if (fs.existsSync('./clancy.json')) {
//     console.log(chalk.green("File exists!")+" -> "+chalk.yellow("clancy.json"))
// } else {
//     console.log(chalk.red("Build file doesn't exist!"))
//     console.log(`Try to create a ${chalk.yellow("clancy.json")} file`)
// }

module.exports = {
    _cwd: ()=>{
        return process.cwd()
    },
    _buildExists: ()=>{
        return fs.existsSync('./clancy.json')
    }
}