const { ipcMain } = require('electron');

ipcMain.on("teste", (event, args) => {
    console.log(args)
})