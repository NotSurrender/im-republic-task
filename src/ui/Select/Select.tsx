import { ChangeEvent, FC } from 'react';
import { SelectProps } from './interfaces';
import './Select.css';

export const Select: FC<SelectProps> = (props) => {
  const { className, id, disabled, options, multiple, onChange } = props;

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    onChange && onChange(selectedOptions);
  };

  return (
    <select
      className={`select ${className}`}
      id={id}
      disabled={disabled}
      multiple={multiple}
      onChange={handleFilter}
    >
      {
        options.map((option) => (
          <option
            className="select-option"
            key={option.value} 
            value={option.value} 
            selected={option.selected}
          >
            {option.text}
          </option>
        ))
      }
    </select>
  );
};