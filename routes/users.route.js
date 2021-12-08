const express = require('express');
const usersController = require('../controllers/users.controller')
const router = express.Router();
const authentication = require('../middleware/authenctication')


router.get('/get', authentication, (req, res) => {
    usersController.getUser(req, res);
}).post('/register', (req, res) => {
    usersController.register(req, res);
}).post('/login', (req, res) => {
    usersController.login(req, res)
}).delete('/:id', authentication, (req, res) => {
    usersController.deleteUser(req, res);
}).put('/:id', authentication, (req, res) => {
    usersController.updateUser(req, res);
})

module.exports = router;