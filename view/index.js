const { ipcRenderer } = require('electron')

const btnOne = document.getElementsByName('btnOne')
btnOne[0].addEventListener('click', async (event, args) => {
  console.log('Ola')
  ipcRenderer.send('send-some-message', { ola: 'mundo' })
})

ipcRenderer.on('receive-asynchronous-reply', (event, arg) => {
  console.log('Recebi uma mensagem assincrona!')
  console.log(arg)
})
