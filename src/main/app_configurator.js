const { BrowserWindow } = require('electron')
require('../presenters/ipc_receiver')

class AppConfigurator {
  constructor () { this.win = null }

  createWindow (dir) {
    this.win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
      }
    })
    this.win.webContents.openDevTools()
    this.win.loadFile(dir)
  }
}

module.exports = new AppConfigurator()
