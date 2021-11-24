//File Systen (Для работы с файлами)
const fs = require('fs')
const path = require('path')
// console.log(fs)

fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) throw new Error(err)

  console.log("Folder is init")
})



