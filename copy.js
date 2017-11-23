let fs = require('fs')
let file = 'demo.mp4'


fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("J'ai lu  " + Math.round(100 * progress / total) + "%")
    })

    read.on('end', () => {
        console.log("J'ai tout finit !!")
    })
})