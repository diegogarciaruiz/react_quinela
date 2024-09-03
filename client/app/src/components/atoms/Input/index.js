
import React from 'react';

const Input = React.forwardRef(({ value, onChange, name }, ref) => {
  return (
    <input
      type="string"
      name={name}
      value={value}
      ref={ref}
      onChange={onChange}
      placeholder="Ingresa un número"
    />
  );
});

export default Input;
