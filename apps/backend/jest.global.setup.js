module.exports = async () => {
  require('ts-node/register');
  require('dotenv').config({ path: '../../.env' });
  process.env.MONGODB_NAME = 'db_test';
};
