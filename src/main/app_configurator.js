const { BrowserWindow } = require('electron')

class AppConfigurator {
  constructor () { this.win = null }

  createWindow (dir) {
    this.win = new BrowserWindow({
      width: 800,
      height: 600,
      nodeIntegration: true
    })
    // this.win.webContents.openDevTools()
    this.win.loadFile(dir)
  }
}

module.exports = new AppConfigurator()
