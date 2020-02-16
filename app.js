const Clancy = require('./src/Clancy')



const test = new Clancy('test')

// for(let x =0;x<100;x++){
//     console.log(test.getdbname())
// }

test.insert({fullName: `Nabeel`},()=>{})
//test.insert({fullName: `Shard`},()=>{})