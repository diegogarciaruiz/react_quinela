
import React from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Image from '../../atoms/Image';
import { useFormContext } from 'react-hook-form';

const TeamInfoField = ({ teamName, photoSrc, name }) => {
  const { register } = useFormContext(); 

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Label text={teamName} />
      <Image src={photoSrc} alt={`Foto de ${teamName}`} />
      <Input {...register(name)} /> 
    </div>
  );
};

export default TeamInfoField;
