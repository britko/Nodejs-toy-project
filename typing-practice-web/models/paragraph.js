'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class paragraph extends Model {
    static associate(models) {
      // define association here
    }
  };
  paragraph.init({
    item: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true,
    },
  }, {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'Paragraph',
    tableName: 'paragraph',
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return paragraph;
};