import { DataTypes } from 'sequelize';
import  sequelize  from '../../config/sequelize.js';

const Otp = sequelize.define('Otp', {

  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generated_otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp_expiration: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get: function () {
      // Sequelize automatically handles the conversion of dates
      return this.getDataValue('otp_expiration');
    },
    set: function (otp_expiration) {
      // Sequelize automatically handles the conversion of dates
      this.setDataValue('otp_expiration', otp_expiration);
    },
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},{
    tableName: 'otps', 
    timestamps: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
});

export default Otp;
