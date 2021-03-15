require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 5555
const Users = require('./api/user-model')
const { findAll } = require('./api/user-model')

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('Welcome to the Users Api')
})

server.get('/api/users', async (req, res) => {
    try {
        const users = await Users.findAll()
        if (!users){
            res.status(404).json({errorMessage: "The users information could not be found." })
        } else {
            res.status(200).json(users)
        }}
        catch {
            res.status(500).json({ errorMessage: "The users information could not be retrieved." })
        }
        
})

server.get('/api/users/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(thisUser => {
            if (!thisUser){
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            } else {
                res.status(200).json(thisUser)           
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The user information could not be retrieved." })
        })  
})

server.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id
    const users = await findAll()
    const user = users.filter(user => user.id === id)
    if (!user[0]){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        Users.delete(id)
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "The user could not be removed" })
            })
    }
})

server.put('/api/users/:id', async (req, res) => {
    const id = req.params.id
    const users = await findAll()
    const user = users.filter(user => user.id === id)
    const updUser = req.body
    if (!user[0]){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else if (!updUser.name || !updUser.bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        Users.update(id, updUser)
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "The user could not be removed" })
            })
    }
})

server.post('/api/users', async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        if(!newUser.name || !newUser.bio) {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."});
    } else {
            res.status(201).json(newUser);
        }} catch (err) {
            res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
        }
})




server.listen(PORT, () => {
    console.log(` \n \n --- Api Server Listening on port ${PORT} --- \n \n `)
})
