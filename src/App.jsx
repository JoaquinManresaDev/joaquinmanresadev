import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import ChapterList from './components/ChapterList';


function App() {

  return (
    <main>
      <h1>Bienvenido a los apuntes de las clases de Programacion Web 1 - IFES</h1>
      <br />
      <ChapterList />
    </main>
  );

}


ReactDOM.render(<App />, document.getElementById('root'));
