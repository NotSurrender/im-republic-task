import { ChangeEvent, FC } from 'react';
import { SearchProps } from './interfaces';
import './Search.css';

export const Search: FC<SearchProps> = (props) => {
  const { className, id, disabled, value, placeholder, onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <input
      type="search" 
      className={`search ${className}`}
      id={id}
      disabled={disabled}
      placeholder={placeholder} 
      value={value}
      onChange={handleChange}
    />
  );
};

