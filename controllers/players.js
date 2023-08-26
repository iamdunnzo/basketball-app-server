const Player = require('../models/players');

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific player by ID
exports.getPlayerById = async (req, res) => {
  const { id } = req.params;
  try {
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new player
exports.createPlayer = async (req, res) => {
  console.log('creating player!')
  const { name, age, team, jersey } = req.body;
  console.log({body: req.body})
  try {
    const newPlayer = await Player.create(req.body);
    console.log({newPlayer});
    res.status(201).json(newPlayer);
  } catch (error) {
    console.log({error});
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing player by ID
exports.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { name, age, team, jersey } = req.body;
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      { name, age, team, jersey },
      { new: true }
    );
    if (!updatedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a player by ID
exports.deletePlayer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlayer = await Player.findByIdAndDelete(id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
