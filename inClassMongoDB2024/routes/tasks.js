const express = require('express')
const router = express.Router();
const TaskController = require('../controllers/task')

// add a user
//localhost:PORT
router.post('/', TaskController.createTask)//huhhh wait
// get all users
//localhost:PORT/api/users
router.get('/', TaskController.listTasks)
// get a user by id
//localhost:PORT/api/users/_ids
router.get('/:id', TaskController.listTask)//make the test mfs

module.exports = router//oh literally make them the same thing