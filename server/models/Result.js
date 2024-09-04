module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define(
    "result",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      jornada: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      homeTeam1: DataTypes.STRING,
      awayTeam1: DataTypes.STRING,
      homeScore1: DataTypes.INTEGER,
      awayScore1: DataTypes.INTEGER,

      homeTeam2: DataTypes.STRING,
      awayTeam2: DataTypes.STRING,
      homeScore2: DataTypes.INTEGER,
      awayScore2: DataTypes.INTEGER,

      homeTeam3: DataTypes.STRING,
      awayTeam3: DataTypes.STRING,
      homeScore3: DataTypes.INTEGER,
      awayScore3: DataTypes.INTEGER,

      homeTeam4: DataTypes.STRING,
      awayTeam4: DataTypes.STRING,
      homeScore4: DataTypes.INTEGER,
      awayScore4: DataTypes.INTEGER,

      homeTeam5: DataTypes.STRING,
      awayTeam5: DataTypes.STRING,
      homeScore5: DataTypes.INTEGER,
      awayScore5: DataTypes.INTEGER,
    },
    {}
  );

  return Result;
};
