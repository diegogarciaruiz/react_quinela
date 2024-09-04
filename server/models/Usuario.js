module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuario",
    }
  );

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Quiniela, { foreignKey: "usuarioId" });
  };

  return Usuario;
};
