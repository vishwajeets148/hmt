// sequelize.mjs

import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://developer:tecraki_123@35.154.154.209:5432/dev_suvidhaform');

const testConnection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

export default sequelize; 
