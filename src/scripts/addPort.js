const electron = require('electron');
const {ipcRenderer} = electron;

const form = document.querySelector('form');

const submitForm = (e) => {
    e.preventDefault();
    const item = e.target.elements['port-selection'].value;
    ipcRenderer.send('port:add', item);
};

form.addEventListener('submit', submitForm);