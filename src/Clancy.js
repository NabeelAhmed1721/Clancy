const fs = require('fs')
const appRoot = require('app-root-path')
const nanoid = require('nanoid')
const jsonfile = require('jsonfile')


function Clancy(_dbname) {
    if(typeof _dbname != 'string') {
        throw new Error('Database name not defined properly!')
    } else if(validateDatabase(_dbname)) {
        throw new Error('Database does not exist! Use Clancy-cli to generate one!')
    } else {
        this._dbname = _dbname
        this._dbroute = appRoot.path+'/Clancy/'+_dbname
    }

    Clancy.prototype.getdbname = () => {
        return this._dbname
    }
    Clancy.prototype.insert = (_data, callback) => {
        var seg = this._dbroute+'/seg.json'
        fs.readFile(seg, 'utf8', (err, data) => {
            if(err) throw err
            var savedData = JSON.parse(data)
            _data = Object.assign({_id: nanoid()}, _data)
            savedData.push(_data)
            console.log(savedData)
            fs.writeFile(seg, JSON.stringify(savedData), 'utf8', callback);
        });
    }
}

function validateDatabase(_dbname) {
    var route = appRoot.path+'/Clancy/'+_dbname
    return !fs.existsSync(route)
}

module.exports = Clancy