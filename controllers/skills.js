const Skills = require('../models/skill');

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific skill by ID
exports.getSkillById = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skills.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new skill
exports.createSkill = async (req, res) => {
  console.log('creating skill!');
  const { name, description, difficulty } = req.body; // Updated field names
  console.log({ body: req.body });
  try {
    const newSkill = await Skills.create({ name, description, difficulty }); // Updated field names
    console.log({ newSkill });
    res.status(201).json(newSkill);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing skill by ID
exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name, description, difficulty } = req.body; // Updated field names
  try {
    const updatedSkill = await Skills.findByIdAndUpdate(
      id,
      { name, description, difficulty }, // Updated field names
      { new: true }
    );
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a skill by ID
exports.deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSkill = await Skills.findByIdAndDelete(id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
