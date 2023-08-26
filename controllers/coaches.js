const Coach = require('../models/coach');

// Get all coaches
exports.getAllCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (error) {
    res.status(500).json({ message: 'Server Error Coach1' });
  }
};

// Get a specific coach by ID
exports.getCoachesById = async (req, res) => {
  const { id } = req.params;
  try {
    const coach = await Coach.findById(id);
    if (!coach) {
      return res.status(404).json({ message: 'Coach not found' });
    }
    res.json(coach);
  } catch (error) {
    console.error('Error fetching coach by ID:', error);
    res.status(500).json({ message: 'Server Error Coach2' });
  }
};

// Create a new coach
exports.createCoach = async (req, res) => {
  const { name, experience, team, speciality } = req.body; // Corrected variable names
  try {
    const newCoach = await Coach.create({ name, experience, team, speciality }); // Corrected variable names
    res.status(201).json(newCoach);
  } catch (error) {
    console.error('Error creating coach:', error);
    res.status(500).json({ message: 'Server Error Coach3' });
  }
};

// Update an existing coach by ID
exports.updateCoach = async (req, res) => {
  const { id } = req.params;
  const { name, experience, team, speciality } = req.body; // Corrected variable names
  try {
    const updatedCoach = await Coach.findByIdAndUpdate(
      id,
      { name, experience, team, speciality }, // Corrected variable names
      { new: true }
    );
    if (!updatedCoach) {
      return res.status(404).json({ message: 'Coach not found' });
    }
    res.json(updatedCoach);
  } catch (error) {
    res.status(500).json({ message: 'Server Error Coach4' });
  }
};


// Delete a coach by ID
exports.deleteCoach = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCoach = await Coach.findByIdAndDelete(id);
    if (!deletedCoach) {
      return res.status(404).json({ message: 'Coach not found' });
    }
    res.json({ message: 'Coach deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error Coach5' });
  }
};