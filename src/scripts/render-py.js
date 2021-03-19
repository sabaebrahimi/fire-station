import { chart1 } from './chart1.js';
import { chart2 } from './chart2.js';
import { chart3 } from './chart3.js';
import { chart4 } from './chart4.js';
import { setBattery, setBluetooth, setFreeFall, setWalking } from './svgLoader.js';
var variables = {
    bluetooth: 0
};

let { PythonShell } = require('python-shell');
let pyshell = new PythonShell('./src/python/bluetooth-config.py');

const electron = require('electron');
const { ipcRenderer } = electron;
let port;
// pyshell.send(port);
ipcRenderer.on("port:add", (e, porti) => {
    port = porti;
    console.log('js ' + port);
    pyshell.send(port);
});

pyshell.on('message', (message) => {
    if (message == 'disconnected') {
        setBluetooth(0);
    } else {
        console.log(message);
        variables.bluetooth = 1;
        variables = JSON.parse(message);
        variablesToDoc();
        // console.log(variables);
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
    updateDataChart(chart1, variables.PPG);
    updateDataChart(chart2, variables.CO);
    updateDataChart(chart3, variables.H2S);
    updateDataChart(chart4, variables.combust);
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

const setSituation = (situation) => {
    let status = "";
    let color = "";
    let isAnyOneRed = false;
    if (variables.bluetooth == 0) {
        status = "No Connection";
        color = "orange";
    } else {
        if (isNormal()) {
            status = "normal";
            color = "green";
            isAnyOneRed = false;
        }
        else {
            if (variables.battery == 2 || variables.battery == 1) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("low battery \n");
            }
            if (variables.bluetooth == 0) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("No Connection \n");
            }
            if (variables.walking == 0) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("Motionless \n");
            }
            if (variables.freefall == 1) {
                color = "red";
                isAnyOneRed = true;
                status.concat("Free Fall \n");
            }
            if (variables.combust >= 10) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("Combust Concentration \n");
            }
            if (variables.CO >= 70) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("CO Concentration \n");
            }
            if (variables.H2S >= 10) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("H2S Concentration \n");
            }
            if (variables.PPG > 170 || variables.PPG < 60) {
                color = "red";
                isAnyOneRed = true;
                status.concat("Abnormal HeartRate \n");
            }
            if (variables.innerTemp >= 42) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("Inside Temp \n");
            }
            if (variables.outerTemp >= 70) {
                if (!isAnyOneRed)
                    color = "orange";
                status.concat("Outside Temp \n");
            }
            if (variables.PPG <= 170 && bvariables.PPG >= 60 && variables.freefall == 0) {
                isAnyOneRed = false;
            }
        }
    }

    if (color == "green") {
        situation.className += ' normal-situation';
    } else if (color == "orange") {
        situation.className += ' orange-situation';
    } else if (color == "red") {
        situation.className += ' red-situation';
    }
    let text = document.getElementById("situation-text");
    text.innerText = status;
};

const isNormal = () => {
    if ((variables.battery == 3 || variables.battery == 4) && variables.freefall == 0 &&
        variables.walking == 1 && variables.bluetooth == 1 && variables.CO < 70 && variables.H2S < 10 &&
        variables.combust < 10 && variables.PPG >= 60 && variables.PPG <= 170 &&
        outerTemp < 70 && innerHum < 42) {
        return true;
    }
    return false;
};

let situation = document.getElementById("situation");
setSituation(situation);
setBattery(4);
setBluetooth(0);
setFreeFall(0);
setWalking(0);
