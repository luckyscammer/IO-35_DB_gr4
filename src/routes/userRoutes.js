const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.put('/:id', userController.edit);
router.delete('/:id', userController.delete);
router.get('/:id', userController.getOne);

module.exports = router;
