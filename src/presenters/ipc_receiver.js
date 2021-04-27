const { ipcMain } = require('electron')

ipcMain.on('send-some-message', (event, args) => {
  console.log('Recebendo uma mensagem assincrona!')
  console.log(args)
  console.log('Retornando uma mensagem assincrona!')
  event.reply('receive-asynchronous-reply', { bom: 'dia' })
})

console.log('Olam unS')
