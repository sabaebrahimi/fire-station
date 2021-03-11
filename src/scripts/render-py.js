let {PythonShell} = require('python-shell');
var variables;
let pyshell = new PythonShell('./src/python/bluetooth-config.py');
pyshell.on('message', (message) => {
    variables = JSON.parse(message);
    console.log(variables);
});