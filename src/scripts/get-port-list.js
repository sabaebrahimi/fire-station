const electron = require('electron');
const {ipcRenderer} = electron;
const {SerialPort} = require('serialport');

async function listSerialPorts() {
    await SerialPort.list().then((ports, err) => {
        if (err) {
            document.getElementById('available-ports').textContent = 'Error in getting ports list';
            document.getElementById('port-selection').innerHTML = '';
            return;
        } 
        console.log('ports', ports);

        if (ports.length === 0) {
            document.getElementById('available-ports').textContent = 'No ports discovered';
            document.getElementById('port-selection').innerHTML = '';
        } else {
            document.getElementById('available-ports').textContent = '';
            const portsList = ports.map(port => {
                return `<option value="${port.path}">${port.path}</option>`
            });

            const portsStr = portsList.join('\n');

            document.getElementById('port-selection').innerHTML = portsStr;
        }
    });
}

function listPorts() {
  listSerialPorts();
  setTimeout(listPorts, 2000);
}

setTimeout(listPorts, 2000);

listSerialPorts();
