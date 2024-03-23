import Sequelize from 'sequelize';
import dotenv from 'dotenv';

<<<<<<< HEAD
const sequelize = new Sequelize('postgres://developer:tecraki_123@35.154.154.209:5432/dev_suvidhaform');
=======
dotenv.config();
>>>>>>> 19f5ac1ca2e3db6132f6e19617ef688812e51881

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'newes6db',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres'
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


testConnection();

export default sequelize;
