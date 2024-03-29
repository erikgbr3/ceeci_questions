'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Bank.belongsTo(models.Room, {
        as: 'RoomBank',
        foreignKey:'roomId'
        }
      )
      models.Bank.hasMany(models.Question, {
        as: 'BankQuestion',
        foreignKey:'bankId'
        }
      )
    }
  }
  Bank.init({
    name: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bank',
  });
  return Bank;
};