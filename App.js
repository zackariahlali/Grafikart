let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events')

let App = {
    start: function() {
        let emitter = new EventEmitter()
        let server = http.createServer((req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            if (req.url === '/') {
                emitter.emit('root', res)
            }
            res.end()
        }).listen(8080)
        return emitter
    }
}

module.exports = App