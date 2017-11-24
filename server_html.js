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
let app = App.start()
app.on('root', function(res) {
        res.write('Je suis à la racine')
    })
    // http.createServer((req, res) => {
    //     res.writeHead(200)
    //     let query = url.parse(req.url, true).query
    //     let name = query.name === undefined ? 'Inconnu' : query.name
    //     fs.readFile('index.html', 'utf8', (err, data) => {
    //         if (err) {
    //             res.writeHead(404)
    //             res.end("PAGE NOT FOUND !")
    //         } else {
    //             res.writeHead(200, {
    //                 'Content-Type': 'text/html; charset=utf-8'
    //             })
    //             data = data.replace('{{ name }}', name)
    //             res.end(data)
    //         }
    //     })
    // }).listen(8888)