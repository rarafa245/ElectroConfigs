const { app, BrowserWindow } = require('electron')
const appConfigurator = require('./app_configurator')

app.whenReady().then(() => {
  appConfigurator.createWindow('../../view/index.html')

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      appConfigurator.createWindow('../../view/index.html')
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
