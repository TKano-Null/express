const express = require('express');
const mongoose = require('mongoose');

//const main = async () => {
  const app = express();

  mongoose.connect('mongodb://localhost:27017/db-name', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log(mongoose.connection.readyState);

  console.log('MongoDB connected!!');

  app.listen(3001, () => {
    console.log(`Server up on 3001`);
  });
//};

//main();