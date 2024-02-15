const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user')

// add a user
//localhost:PORT
router.post('/', UserController.createUser)
// get all users
//localhost:PORT/api/users
router.get('/', UserController.listUsers)
// get a user by id
//localhost:PORT/api/users/_ids
router.get('/:id', UserController.listUser)

module.exports = router //okay so i do need the whole route thing