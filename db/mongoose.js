const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

  const mongoDB = "mongodb://elisa:pdnlxx021@ds227255.mlab.com:27255/fcc-message-board";

  mongoose.connect(mongoDB, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = {
  mongoose
};
