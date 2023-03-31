const electron = require('electron');
const {ipcRenderer} = electron;
export let port = 'COM6';
ipcRenderer.on('port:add', (e, porti) => {
    port = porti;
});
