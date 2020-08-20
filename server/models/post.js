module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    id: {
      type: Sequelize.INTEGER,
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
      allowNull: false,
      defaultValue: null,
    },
    img: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
    },
    like: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
    },
  }, {
    timestamps: true,
  });
};
