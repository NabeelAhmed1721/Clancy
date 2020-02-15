const fs = require('fs')
const appRoot = require('app-root-path');

class Clancy {
    constructor(_dbname) {
        if(typeof _dbname != 'string') {
            throw new Error('Database name not defined properly!')
        } else {
            this._dbname = _dbname
        }
    }
    getdbname() {
        console.log(validateDatabase(this._dbname))
        return this._dbname
    }
}

function validateDatabase(_dbname) {
    var route = appRoot.path+'/Clancy/'+_dbname
    console.log(route)
    return fs.existsSync(route)
}

module.exports = Clancy