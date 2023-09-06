const express = require("express");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const moviesRoutes = require('./routes/movies');
const dbConfig = require('./config/database');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use('/api/movies/', moviesRoutes);

mongoose.connect(dbConfig.database).then(() => {
  console.log('Connected to MongoDB');

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});