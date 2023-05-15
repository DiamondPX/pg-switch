var fs = require('fs')
const file = './postgresql.conf'
replaceFile(file)
function replaceFile(file){
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    var result = data.replace(/listen_addresses = '\*'/g, `listen_addresses = 'localhost'`)
  
    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
  
}
