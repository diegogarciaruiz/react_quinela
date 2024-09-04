module.exports = (sequelize, DataTypes) => {
  const Quiniela = sequelize.define(
    "quiniela",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      resultId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "results",
          key: "id",
        },
      },
      // Predicciones de los partidos
      homeTeam1: DataTypes.STRING,
      awayTeam1: DataTypes.STRING,
      homeScorePrediction1: DataTypes.INTEGER,
      awayScorePrediction1: DataTypes.INTEGER,

      homeTeam2: DataTypes.STRING,
      awayTeam2: DataTypes.STRING,
      homeScorePrediction2: DataTypes.INTEGER,
      awayScorePrediction2: DataTypes.INTEGER,

      homeTeam3: DataTypes.STRING,
      awayTeam3: DataTypes.STRING,
      homeScorePrediction3: DataTypes.INTEGER,
      awayScorePrediction3: DataTypes.INTEGER,

      homeTeam4: DataTypes.STRING,
      awayTeam4: DataTypes.STRING,
      homeScorePrediction4: DataTypes.INTEGER,
      awayScorePrediction4: DataTypes.INTEGER,

      homeTeam5: DataTypes.STRING,
      awayTeam5: DataTypes.STRING,
      homeScorePrediction5: DataTypes.INTEGER,
      awayScorePrediction5: DataTypes.INTEGER,

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {}
  );

  Quiniela.associate = function (models) {
    Quiniela.belongsTo(models.User, { foreignKey: "userId" }); // Relación con el usuario que envía la quiniela
    Quiniela.belongsTo(models.Result, { foreignKey: "resultId" }); // Relación con los resultados reales
  };

  return Quiniela;
};
