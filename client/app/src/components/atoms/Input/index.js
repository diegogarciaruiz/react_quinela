
import React from 'react';

const Input = React.forwardRef(({ value, onChange, name, disabled  }, ref) => {
  return (
    <input
    type="number"
    name={name}
    value={value}
    ref={ref}
    onChange={onChange}
    placeholder="Ingresa un número"
    disabled={disabled}
    />
  );
});

export default Input;
