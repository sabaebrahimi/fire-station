import {chart1} from './chart1.js';
import {chart2} from './chart2.js';
import {chart3} from './chart3.js';
import {chart4} from './chart4.js';
import {setBattery, setBluetooth, setFreeFall, setWalking} from './svgLoader.js';

setBattery(4);
setBluetooth(1);
setFreeFall(0);
setWalking(0);

let { PythonShell } = require('python-shell');
var variables;
let pyshell = new PythonShell('./src/python/bluetooth-config.py');
pyshell.on('message', (message) => {
    if (message == 'disconnected') {
        setBluetooth(0);
    } else {
    variables = JSON.parse(message);
    variablesToDoc();
    console.log(variables);
    }
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
    updateDataChart (chart1, variables.PGG);
    updateDataChart (chart2, variables.CO);
    updateDataChart (chart3, variables.H2S);
    updateDataChart (chart4, variables.combust);
    setBattery(variables.battery);
    setWalking(variables.walking);
    setFreeFall(variables.freefall);
    setBluetooth(1);
}

const updateDataChart = (chart, data) => {
    if (chart.data.datasets[0].data.length == 5) {
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update(0);
}
