// const express = require('express')
// const server = express()
// server.use(express.json())
// server.use('cors')

// const Users = require('./user-model')

// server.get('/', (req, res) => {
//     res.send('Welcome to the Users Api')
// })

// server.get('/api/users', async (req, res) => {
//     try {
//         const users = await Users.findAll()
//         console.log('users: ', users)
//         if (!users){
//             res.status(404).json({errorMessage: "The users information could not be found." })
//         } else {
//             res.status(200).json(users)
//         }}
//         catch {
//             res.status(500).json({ errorMessage: "The users information could not be retrieved." })
//         }
        
// })

// server.get('api/users/:idx', async (req, res) => {
//     const { idx } = req.params
//     console.log('idx: ', idx)
//     console.log('req.body: ', req.body)
//     try{
//         const path = req.path
//         console.log('path:', path);
//         const oldUser = await Users.findByIdx(idx);
//         if(!oldUser){
//             res.status(404).json({ message: "The user with the specified ID does not exist." })
//         } else {
//             res.status(200).json(oldUser)
//         }
//     }catch(err) {
//         res.status(500).json({ errorMessage: "The user information could not be retrieved." })
//     }
// })

// server.post('/api/users', async (req, res) => {
//     try {
//         const newUser = await Users.create(req);
//         if(!newUser.name || !newUser.bio) {
//         res.status(400).json({errorMessage: "Please provide name and bio for the user."});
//     } else {
//             res.status(201).json(newUser);
//         }} catch (err) {
//             console.log('error creating new user: ', err)
//             res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
//         }
//     }
// )

