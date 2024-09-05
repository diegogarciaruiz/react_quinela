import React from 'react';
import { useForm, FormProvider,  } from 'react-hook-form'; 
import TeamList from '../../components/organisim/TeamList';
import submitData from '../../api/PostData';
import fetchData from '../../api/GetData';
import { useEffect, useState } from 'react';
import { MyContext } from '../../context/contextProvider';
import { useContext } from 'react';

const HomePage = () => {
  const { results, setResults } = useContext(MyContext);
  const methods = useForm(); 
  const { setValue } = methods;
  const [isDisabled, setIsDisabled] = useState(false);

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

  const onSubmit = async (data) => {
    const dataToSend = {
      jornadaId: 2, 
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
    await submitData(dataToSend);
    const result = await fetchData(dataToSend.jornadaId);
    setResults(result); 


    if (result) {
      setValue('team-0-0', result.data.homeScore1);
      setValue('team-0-1', result.data.awayScore1);
      setValue('team-1-0', result.data.homeScore2);
      setValue('team-1-1', result.data.awayScore2);
      setValue('team-2-0', result.data.homeScore3);
      setValue('team-2-1', result.data.awayScore3);
      setValue('team-3-0', result.data.homeScore4);
      setValue('team-3-1', result.data.awayScore4);
      setValue('team-4-0', result.data.homeScore5);
      setValue('team-4-1', result.data.awayScore5);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(1); 
      setResults(result);
    };

    loadData();
  }, []);
  const toggleInputs = () => {
    setIsDisabled(!isDisabled); // Cambia el estado de los inputs para habilitar o deshabilitar
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>Página Principal</h1>
        <TeamList teams={teams}  isDisabled={isDisabled}/>
        <button type="button" onClick={toggleInputs}>
          {isDisabled ? "Habilitar Edición" : "Deshabilitar Edición"}
        </button>      </form>
    </FormProvider>
  );
};

export default HomePage;
