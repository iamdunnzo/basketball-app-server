const express = require('express');
const router = express.Router();
const playerController = require('../controllers/players');
const { authenticateUser } = require('../middleware/auth');

// Routes for Players
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', playerController.createPlayer);
router.put('/:id', playerController.updatePlayer);
router.delete('/:id', playerController.deletePlayer);

module.exports = router;