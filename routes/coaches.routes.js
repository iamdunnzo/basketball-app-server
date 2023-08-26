const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coaches');
const { authenticateUser } = require('../middleware/auth');

// Routes for coaches
router.get('/', coachController.getAllCoaches);
router.get('/:id', coachController.getCoachesById);
router.post('/', coachController.createCoach); // Corrected
router.put('/:id', coachController.updateCoach);
router.delete('/:id', coachController.deleteCoach);

module.exports = router;
