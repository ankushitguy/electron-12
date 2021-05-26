const { app, BrowserWindow,Menu, MenuItem } = require('electron');
// const installer = require('electron-installer-windows');
// const options = {
//     src: 'dist/app-win32-x64/',
//     dest: 'dist/installers/'
//   }
const url = require('url')
const path = require('path')
const template = [];

// async function main (options) {
//     console.log('Creating package (this may take a while)')
//     try {
//       await installer(options)
//       console.log(`Successfully created package at ${options.dest}`)
//     } catch (err) {
//       console.error(err, err.stack)
//       process.exit(1)
//     }
//   }
//   main(options)

function createWindow(){
    let appWindow = new BrowserWindow({width: 800, height: 600});
    // appWindow.loadURL('https://www.google.co.in');
    appWindow.loadURL(url.format ({
       pathname: path.join(__dirname, 'index.html'),
       protocol: 'file:',
       slashes: true
    }))
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
app.on('ready',createWindow);
