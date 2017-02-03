# airport-timezone
The package is used to look for timezone based on airport IATA codes.

# Retreive Timezone
```javascript
    
    var airport_tz = require('./timezone');

    var IATA = 'NYC'
    var timezone_obj = airport_tz.findWhere({ iata: IATA });
    
    console.log('Searching timezone for: ' + IATA); //Searching timezone for: NYC
    console.log('Timezone: ' + timezone_obj.get('timezone')); // Timezone: America/New_York
    console.log('GMT: ' + timezone_obj.utcOffset()); //GMT: -5
```
