# electron-12
 Electron App with windows installer

# Electron   13.0.0
# Node       14.16.0
# Chromium   91.0.4472.69
Download and install Node.js
https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi

Ref:- Creating Windows installer Installer
https://github.com/electron-userland/electron-installer-windows/
Visual Studio download
https://code.visualstudio.com/download


create project folder xyz
inside create .gitignore
insert > “node_modules” and save

in visual studio terminal type
npm init –y

npm install --save-dev electron@13.0.0
npm install electron-packager --save-dev
npm install --save-dev electron-prebuilt
npm install --save-dev electron-installer-windows




edit package.json
{
  "name": "xyz",
  "version": "1.0.0",
  "description": "Project for my web browser application",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-packager . xyz --platform win32 --arch x64 --out dist/",
    "setup": "electron-installer-windows --src dist/xyz-win32-x64/ --dest dist/installers/"
  },
  "author": "ankushitguy",
  "license": "ISC",
  "devDependencies": {
    "electron": "*",
    "electron-installer-windows": "*",
    "electron-packager": "*",
    "electron-prebuilt": "*"
  },
  "dependencies": {}
}










Index.js

const { app, BrowserWindow,Menu, MenuItem } = require('electron');
const url = require('url')
const path = require('path')
const template = [];

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


index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <h1>Heading</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officia labore eligendi illo officiis consequuntur quidem fugit saepe quis, magni ducimus a deleniti dolore dolorem alias quam eius nemo velit?</p>
</body>
</html>


npm run-script build
npm run-script setup
