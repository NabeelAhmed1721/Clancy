const Clancy = require('./src/Clancy')

const test = new Clancy('test')

test.insert({fullName: "Nabeel Ahmed"}, ()=>{console.log("Finsihed!")})