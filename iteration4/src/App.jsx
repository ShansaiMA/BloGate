import './App.css';
import React from 'react';
import MainView from './MainView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainView/>
    </>
  )
}

export default App
