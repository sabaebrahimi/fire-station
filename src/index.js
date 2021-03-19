const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

// process.env.NODE_ENV = 'production';

if (require('electron-squirrel-startup')) {
  app.quit();
}
let mainWindow, setBluetoothWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1370,
    height: 770,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.maximize();
  mainWindow.on('closed', () => {
    app.quit();
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // mainWindow.webContents.openDevTools();
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const createBluetoothSetWindow = () => {
  setBluetoothWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Set Bluetooth Port',
    webPreferences: {
      nodeIntegration: true
    }
  });

  setBluetoothWindow.loadFile(path.join(__dirname, 'setBluetoothWindow.html'));
};

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        submenu: [
          {
            label: 'Set Bluetooth Port',
            click() {
              createBluetoothSetWindow();
            }
          }
        ]
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (process.platform == 'darwin') {
  mainMenuTemplate.unshift({});
}
if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ?
          'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  });
}
