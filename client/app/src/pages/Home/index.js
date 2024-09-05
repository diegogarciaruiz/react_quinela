
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import TeamList from '../../components/organisim/TeamList';
import submitData from '../../api/PostData';

const HomePage = () => {
  const methods = useForm(); 
  const teams = [
    { name: 'Team A', photo: './path/to/teamA.png' },
    { name: 'Team B', photo: './path/to/teamB.png' },
    { name: 'Team C', photo: './path/to/teamC.png' },
    { name: 'Team D', photo: './path/to/teamD.png' },
    { name: 'Team E', photo: './path/to/teamE.png' },
    { name: 'Team F', photo: './path/to/teamF.png' },
    { name: 'Team G', photo: './path/to/teamG.png' },
    { name: 'Team H', photo: './path/to/teamH.png' },
    { name: 'Team I', photo: './path/to/teamI.png' },
    { name: 'Team J', photo: './path/to/teamJ.png' },
  ];

  const onSubmit = (data) => {
    const dataToSend = {
      jornadaId: 1, 
      homeTeam1: teams[0].name,
      awayTeam1: teams[1].name,
      homeScore1: parseInt(data['team-0-0']),
      awayScore1: parseInt(data['team-0-1']),
      homeTeam2: teams[2].name,
      awayTeam2: teams[3].name,
      homeScore2: parseInt(data['team-1-0']),
      awayScore2: parseInt(data['team-1-1']),
      homeTeam3: teams[4].name,
      awayTeam3: teams[5].name,
      homeScore3: parseInt(data['team-2-0']),
      awayScore3: parseInt(data['team-2-1']),
      homeTeam4: teams[6].name,
      awayTeam4: teams[7].name,
      homeScore4: parseInt(data['team-3-0']),
      awayScore4: parseInt(data['team-3-1']),
      homeTeam5: teams[8].name,
      awayTeam5: teams[9].name,
      homeScore5: parseInt(data['team-4-0']),
      awayScore5: parseInt(data['team-4-1']),
    };
    console.log("Datos a enviar:", dataToSend);
     submitData(dataToSend)
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>Página Principal</h1>
        <TeamList teams={teams} />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
};

export default HomePage;
