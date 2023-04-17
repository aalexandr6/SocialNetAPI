const { connect, connection } = require('mongoose');
const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/your-database-name';

connect(connectionString);

module.exports = connection;
