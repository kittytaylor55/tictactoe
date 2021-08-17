// LOAD DATA
const express = require('expresss');
//const router = express.router();
const path = require('path');
const notesDB = require('../db/db.json');
const fs = require('fs')
var dataBase = []

// ROUTING
module.exports = (app) => {
     // API GET Requests
    app.get('/api/game', (req,res) =>  {
        fs.readFile('./db/db.json', (err,data) => {
            if (err) throw err
            dataBase = JSON.parse(data);
            res.json(dataBase)
        })
    })
};
//add a new game? to db
    app.post('/api/game', (req,res) => {
        dataBase.push(req.body)
        fs.writeFile('./db/db.json', JSON.stringify(dataBase), function (err)  {
            if (err) {
                return console.log(err)
            } else {
                console.log('New Game')
            }
            })
            res.json(req.body);
        });

 //update game?
        app.put('/api/:id', (req,res) =>  {
        res.send({type:'PUT'})
            })

app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  
});
