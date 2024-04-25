fs = require('fs');
os = require('os');

var user = os.userInfo();

console.log(user.username);

fs.appendFile('greeting.txt','Hi ' + user.username + '!', ()=> { console.log('Work is Complete')});