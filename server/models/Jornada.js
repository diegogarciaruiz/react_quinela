module.exports = (sequelize, DataTypes) => {
  const Jornada = sequelize.define('jornada', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false // Nombre o número de la jornada (por ejemplo: "Jornada 1")
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false // Fecha de la jornada
    }
  }, {});

  Jornada.associate = function(models) {
    Jornada.hasMany(models.Quiniela, { foreignKey: 'jornadaId' });
    Jornada.hasMany(models.Result, { foreignKey: 'jornadaId' }); // Relación con los resultados
  };

  return Jornada;
};
