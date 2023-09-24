const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
const db = process.env.MONGO_DB_NAME;

mongoose.connect(url + db);

module.exports = mongoose.connection;