const fs = require('fs')

module.exports = (on, config) => {
  on('task', {
    countFiles(folderName) {
      return new Promise((resolve, reject) => {
        fs.readdir(folderName, (err, files) => {
          if (err) {
            return reject(err)
          }

          resolve(files.length)
        })
      })
    },
  })
}