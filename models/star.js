'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Star.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      lightYears: DataTypes.INTEGER,
      constellation: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Star',
      tableName: 'stars'
    }
  )
  return Star
}
