import { chart1 } from './chart1.js';
import { chart2 } from './chart2.js';
import { chart3 } from './chart3.js';
import { chart4 } from './chart4.js';
import { setBattery, setBluetooth, setWalking } from './svgLoader.js';
var variables = {
    bluetooth: 0
};

let { PythonShell } = require('python-shell');
const options = {
    mode: 'text',
    pythonPath: 'python'
}
let bluetoothShell = new PythonShell('./resources/app/src/python/bluetooth-config.py', options);


const electron = require('electron');
const { ipcRenderer } = electron;
let port;
ipcRenderer.on("port:add", (e, porti) => {
    port = porti;
    bluetoothShell.send(port);
});

bluetoothShell.on('message', (message) => {
    if (message == 'disconnected') {
        setBluetooth(0);
        variables.bluetooth = 0;
        setSituation();
    } else {
        variables = JSON.parse(message);
        variables = { ...variables, bluetooth: 1 };
        variablesToDoc();
        console.log(variables);
        setSituation();
    }
});


const variablesToDoc = () => {
    document.getElementById('inner-temp').innerText = variables.innerTemp;
   // document.getElementById('inner-hum').innerText = variables.innerHum;
    document.getElementById('outer-temp').innerText = variables.outerTemp;
    document.getElementById('outer-hum').innerText = variables.outerHum;

    if (variables.PPG == -1)
        document.getElementById('ppg-number').innerText = "N/A";
    else if (variables.PPG == -3)
        document.getElementById('ppg-number').innerText = "Measuring...";
    else if (variables.PPG == -4)
        document.getElementById('ppg-number').innerText = "No Skin Detected";
    else
        document.getElementById('ppg-number').innerText = variables.PPG;

    if (variables.CO2 == -1)
        document.getElementById('co-number').innerText = "N/A";
    else if (variables.CO2 == -2)
        document.getElementById('co-number').innerText = "Warm Up";
    else
        document.getElementById('co-number').innerText = variables.CO;

    if (variables.H2 == -1)
        document.getElementById('h2s-number').innerText = "N/A";
    else if (variables.H2 == -2)
        document.getElementById('h2s-number').innerText = "Warm Up";
    else
        document.getElementById('h2s-number').innerText = variables.H2;

    if (variables.ethanol == -1)
        document.getElementById('combust-number').innerText = "N/A";
    else if (variables.ethanol == -2)
        document.getElementById('combust-number').innerText = "Warm Up";
    else
        document.getElementById('combust-number').innerText = variables.combust;

    updateDataChart(chart1, variables.PPG);
    updateDataChart(chart2, variables.CO2);
    updateDataChart(chart3, variables.H2);
    updateDataChart(chart4, variables.ethanol);
    setBattery(variables.battery);
    setWalking(variables.walking);
    setBluetooth(1);
}

const updateDataChart = (chart, data, type) => {
    if (data <= -1 && data >= -4) {
        data = 0;
    }

    if (chart.data.datasets[0].data.length == 10) {
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update(0);
}

const setSituation = () => {
    let situation = document.getElementById("situation");
    let status = "";
    let color = "";
    let isAnyOneRed = false;
    if (variables.bluetooth == 0) {
        status = "No Connection";
        color = "orange";
    } else {
        status = "";
        if (isNormal()) {
            status = "normal";
            color = "green";
            isAnyOneRed = false;
        }
        else {
            let p = parseInt(variables.PPG);
            if (((p <= 170 && p >= 60) || (p >= -4 && p <= -1)) && variables.freefall == 0) {
                isAnyOneRed = false;
            }
            if (variables.battery == 2 || variables.battery == 1) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("Low battery \n");
            }
            if (variables.walking == 0) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("Motionless \n");
            }
            if (variables.ethanol >= 10) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("Ethanol Concentration \n");
            }
            if (variables.CO2 >= 70) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("CO2 Concentration \n");
            }
            if (variables.H2 >= 10) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("H2 Concentration \n");
            }
            if (p > 170 || (p < 60 && p >= 0)) {
                color = "red";
                isAnyOneRed = true;
                status += ("Abnormal HeartRate \n");
            }
            if (variables.innerTemp >= 42) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("Inside Temp \n");
            }
            if (variables.outerTemp >= 70) {
                if (isAnyOneRed === false)
                    color = "orange";
                status += ("Outside Temp \n");
            }
        }
    }
    if (color == "green") {
        situation.className = ' normal-situation';
    } else if (color == "orange") {
        situation.className = 'situation situation-initial orange-situation';
    } else if (color == "red") {
        situation.className = 'situation situation-initial red-situation';
    }
    let text = document.getElementById("situation-text");
    text.innerText = status;
    if (color === "green" || (status === "No Connection")) {
        text.className = 'status';
    }
    else {
        text.className = "status status-small";
    }
};

const isNormal = () => {
    if ((variables.battery == 3 || variables.battery == 4) && 
        variables.walking == 1 && variables.bluetooth == 1 && variables.CO2 < 70 && variables.H2 < 10 &&
        variables.ethanol < 10 && ((variables.PPG >= 60 && variables.PPG <= 170) ||
            (variables.PPG >= -4 && variables.PPG <= -1)) &&
        outerTemp < 70 && innerHum < 42) {
        return true;
    }
    return false;
};


setSituation();
setBattery(4);
setBluetooth(0);
setWalking(0);
