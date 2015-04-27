// API : https://pushbots.com/developer/api/1
var pushbots = require('pushbots');
var Pushbots = new pushbots.api({
    id: '553dd237177959d44f8b4567',
    secret: '56ba71b9fdad4d111c816a1b2f79c594'
});
Pushbots.setMessage("Hello from pushbots node module", 1);
Pushbots.customFields({
    "openURL": "http://thejackalofjavascript.com/"
});
Pushbots.push(function(response) {
    console.log('Push Response : ', response);
});
