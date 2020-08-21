module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
    },
    text: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
    },
    img: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
    },
    like: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    timestamps: true,
  });
};
