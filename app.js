const Clancy = require('./src/Clancy')

const test = new Clancy('test')

console.log(test.getdbname())

test.insert({fullName: `Nabeel`}, ()=>{})
test.insert({fullName: `Shard`}, ()=>{})