var fs = require('fs');

var airports_tz = JSON.parse(fs.readFileSync('airports.json', 'utf-8'));

var airportObj = function(obj){
    this.obj = obj;
}

airportObj.prototype.get = function(key){
    var self = this;
    return self.obj[key];
}

airportObj.prototype.utcOffset = function(){
    var self = this;
    return self.obj.offset === undefined ? null : self.obj.offset.gmt;
}

var findWhere = function(object){
    for(var i = 0; i < airports_tz.length; i++){
        var airport = airports_tz[i];
        
        for(var key in object){
            if(object[key] === airport[key]) {
                return new airportObj(airport);
            }
        }
    }

    return new airportObj({});
}

module.exports = {
    findWhere : findWhere
}
