const fs = require('fs')

class Clancy {
    constructor(_dbname) {
        if(typeof _dbname != 'string') {
            throw new Error('Database name not defined properly!')
        } else {
            this._dbname = _dbname
        }
    }
    getdbname() {
        return this._dbname
    }
}

function validateDatabase(_dbname) {

}

module.exports = Clancy