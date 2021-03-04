const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'production';

if (require('electron-squirrel-startup')) {
  app.quit();
}
let mainWindow;
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

