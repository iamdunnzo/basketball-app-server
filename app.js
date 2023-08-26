const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:4200/basketball-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  debug: true
})
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Routes
const coachesRoutes = require('./routes/coaches.routes');
const playersRoutes = require('./routes/players.routes');
const skillsRoutes = require('./routes/skills.routes');
const authRoutes = require('./routes/auth.routes');
app.use('/coaches', coachesRoutes);
app.use('/players', playersRoutes);
app.use('/skills', skillsRoutes);
app.use('/auth', authRoutes);

// Error handling middleware (centralized error handling)
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
