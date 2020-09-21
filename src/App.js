import React from 'react';
import Datamodel from './components/datamodels';
import { Route } from 'react-router';
import Navbar from './components/navbar';
import Catalogo from './components/catalogo';

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
        path="/datamodels/:id"
        render={({ match }) => <Datamodel custom={match.params.id} />}
      />
    </div>
  );
}

export default App;
