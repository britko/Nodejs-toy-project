'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class sentence extends Model {
    static associate(models) {
      // define association here
    }
  };
  sentence.init({
    item: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
  }, {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'Sentence',
    tableName: 'sentence',
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return sentence;
};