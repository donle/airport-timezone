var airport_tz = require('airport-tz');

var IATA = 'NYC'

console.log('Searching timezone for: ' + IATA);
console.log('Timezone: ' + airport_tz.findWhere({ iata: IATA }).get('timezone'));
console.log('GMT: ' + airport_tz.findWhere({ iata: IATA }).utcOffset());

