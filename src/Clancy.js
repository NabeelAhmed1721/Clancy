const fs = require('fs')
const appRoot = require('app-root-path');

class Clancy {
    constructor(_dbname) {
        if(typeof _dbname != 'string') {
            throw new Error('Database name not defined properly!')
        } else if(validateDatabase(_dbname)) {
            throw new Error('Database does not exist! Use Clancy-cli to generate one!')
        } else {
            this._dbname = _dbname
        }
    }
    getdbname() {
        return this._dbname
    }
    insert(data, callback) {
        console.log(data)
        callback()
    }
}

function validateDatabase(_dbname) {
    var route = appRoot.path+'/Clancy/'+_dbname
    return !fs.existsSync(route)
}

module.exports = Clancy