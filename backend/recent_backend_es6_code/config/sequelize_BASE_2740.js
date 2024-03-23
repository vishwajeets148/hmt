// sequelize.mjs

import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:urvashi@localhost:5432/newes6db');

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
