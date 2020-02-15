const Clancy = require('./src/Clancy')

const test = new Clancy('test')

test.insert({id: 1}, ()=>{console.log("Finsihed!")})