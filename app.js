const Clancy = require('./src/Clancy')

const test = new Clancy('test')

console.log(test.getdbname());

test.insert({id: 1}, ()=>{console.log("Finsihed!")})