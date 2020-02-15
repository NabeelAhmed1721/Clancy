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
            this._dbroute = appRoot.path+'/Clancy/'+_dbname
        }
    }
    getdbname() {
        return this._dbname // Just return DB name
    }
    insert(_data, callback) { // Insert Value into DB
        //console.log(_data)
        var seg = this._dbroute+'/seg.json'
        fs.readFile(seg, 'utf8', (err, data) => {
            if(err) throw err
            var savedData = JSON.parse(data)
            savedData.push(_data)
            fs.writeFile(seg, JSON.stringify(savedData), 'utf8', callback);
        });
    }
}

function validateDatabase(_dbname) {
    var route = appRoot.path+'/Clancy/'+_dbname
    return !fs.existsSync(route)
}

module.exports = Clancy