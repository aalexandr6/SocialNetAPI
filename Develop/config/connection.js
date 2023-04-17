const { connect, connection } = require('mongoose');
const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString);

module.exports = connection;
