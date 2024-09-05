import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import { useFormContext } from "react-hook-form";

const TeamInfoField = ({ teamName, photoSrc, name,isDisabled}) => {
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Label text={teamName} />
      <Image src={photoSrc} alt={`Foto de ${teamName}`} />
      <Input {...register(name)} value={value} disabled={isDisabled} />
    </div>
  );
};

export default TeamInfoField;
