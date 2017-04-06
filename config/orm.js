var connection = require('./connection.js');

var orm = {
    all: function (tableInput, cb) { 
        connection.query('select * from '+ tableInput +';', function(err, result){
            if (err) throw err; 
            cb(result)
        })
    },
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured = true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    create: function (tableInput, val, cb) {
        console.log(tableInput);
        connection.query("INSERT INTO "+tableInput+" ('burger_name','devoured') VALUES ('"+val+" ,0');", function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;