const fs = require('fs')


fs.writeFileSync('gilad.txt','This file was created by Node.js')
fs.copyFileSync('gilad.txt', 'copyOfGilad.txt')

fs.renameSync('copyOfGilad.txt', 'copyOfGiladRenamed.txt');

fs.readdirSync('./').forEach(file => console.log(file));