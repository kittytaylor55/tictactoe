
// DEPENDENCIES
const path = require('path')

// ROUTING
module.exports = (app) => {


    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    app.get('/game', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/game.html'))
    })
      // If no matching route is found default to home
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
}
