const electron = require('electron');
const {ipcRenderer} = electron;
const {SerialPort} = require('serialport');

async function listSerialPorts() {
    console.log("hereee");
    await SerialPort.list().then((ports, err) => {
        if (err) {
            document.getElementById('available-ports').textContent = 'Error in getting ports list';
            return;
        } 
        console.log('ports', ports);

        if (ports.length === 0) {
            document.getElementById('available-ports').textContent = 'No ports discovered'
        } else {
            const portsList = ports.map(port => {
                return `<p>${port.path}</p>`
            });

            const portsStr = portsList.join('\n');

            document.getElementById('available-ports').innerHTML = portsStr;
        }
    });
}

function listPorts() {
  listSerialPorts();
  setTimeout(listPorts, 2000);
}

// Set a timeout that will che  ck for new serialPorts every 2 seconds.
// This timeout reschedules itself.
setTimeout(listPorts, 2000);

listSerialPorts();
