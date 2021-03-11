let {PythonShell} = require('python-shell');
var variables;
let pyshell = new PythonShell('./src/python/bluetooth-config.py');
pyshell.on('message', (message) => {
    variables = JSON.parse(message);
    variablesToDoc();
    // console.log(variables);
});

const variablesToDoc = () => {
    document.getElementById('inner-temp').innerText = variables.innerTemp;
    document.getElementById('inner-hum').innerText = variables.innerHum;
    document.getElementById('outer-temp').innerText = variables.outerTemp;
    document.getElementById('outer-hum').innerText = variables.outerHum;
    document.getElementById('ppg-number').innerText = variables.PPG;
    document.getElementById('co-number').innerText = variables.CO;
    document.getElementById('h2s-number').innerText = variables.H2S;
    document.getElementById('combust-number').innerText = variables.combust;
}