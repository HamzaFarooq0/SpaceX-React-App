import React, { useCallback, useState } from 'react';
import LaunchList from '../LaunchList';
import LaunchProfile from '../LaunchProfile';
import './App.css';

const App = () => {
  const [id, setId] = useState(109);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;
