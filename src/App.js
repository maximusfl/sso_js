import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home'
import {AddApp} from './pages/AddApp'
import {Navbar} from './components/Navbar'
import {AllApps} from './pages/AllApps'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'

function App() {
  return (
    <AlertState>
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={'/'} exact component ={Home}/>
          <Route path={'/addApp'} exact component ={AddApp}/>
          <Route path={'/allApps'} exact component ={AllApps}/>
        </Switch>
      </div>
    </BrowserRouter>
    </AlertState>
  );
}

export default App;
