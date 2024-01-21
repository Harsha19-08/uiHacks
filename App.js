
import React, { useState, useRef } from 'react';
import Preview from './Preview';
import Configuration from './Configuration';

import Login from './Login';


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeLightSource, setActiveLightSource] = useState(1);
  const previewBox = useRef();

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="container App">
      {authenticated ? (
        <div className="flex">
          <Preview setActiveLightSource={setActiveLightSource} previewBox={previewBox} />
          <Configuration previewBox={previewBox} activeLightSource={activeLightSource} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
