
const{Schema, model} = require ('mongoose')


const gameSchema = new Schema ({
    xIsNext: {
        type: Boolean, default: true 
    } 
})

const Game = model('Game', gameSchema) 
module.exports = Game