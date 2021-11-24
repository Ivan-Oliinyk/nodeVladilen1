//ДЛя работы с путями
const path = require('path')
// console.log(path)

console.log(__filename)
console.log(path.basename(__filename))

console.log(__dirname)
console.log(path.dirname(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))
console.log(path.parse(__filename).root)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).name)

console.log(path.join(__dirname, '../test', 'second.html'))

console.log(path.resolve(__dirname, '../test', 'second.html'))
