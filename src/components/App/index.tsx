import { FC } from 'react';
import { Main } from '../Main';
import './App.css';

export const App: FC = () => {
  return (
    <>
      <header className="header">
        New Mexico state library
      </header>

      <Main className="main" />
    </>
  );
};
