import React from 'react';
import Datamodel from './components/datamodels';
import { Route } from 'react-router';
import Navbar from './components/navbar';
import Catalogo from './components/catalogo';
import Segment from './components/segment';



function App() {
  return (
    <div>
      <Route
        path="/"
        render={() => <Navbar />}
      />
      <Route
        path="/models"
        render={() => <Catalogo />}
      /> 
      <Route
     exact path="/models/:segmento"
      render={({ match }) => <Segment name={match.params.name}/>}
    />
    
      <Route
        path="/datamodels/:id"
        render={({ match }) => <Datamodel custom={match.params.id} />}
      />
    </div>
  );
}

export default App;
