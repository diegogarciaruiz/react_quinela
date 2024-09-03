
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import TeamList from '../../components/organisim/TeamList';

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
    console.log(data); 
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
