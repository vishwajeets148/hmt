import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";



const State = sequelize.define("State", {
    state_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'states',
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the created_at column name
    updatedAt: 'updated_at', // Customize the updated_at column name
  });


export default State;
