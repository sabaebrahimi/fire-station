const electron = require('electron');
const {ipcRenderer} = electron;

const submitForm = (e) => {
    e.preventDefault();
    const item = document.getElementById('port').value;
    ipcRenderer.send('port:add', item);
};
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);