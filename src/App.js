import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { AddApp } from './pages/AddApp'
import { Navbar } from './components/Navbar'
import { AllApps } from './pages/AllApps'
import { SingleAppPage } from './pages/SingleAppPage'

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/addApp'} exact component={AddApp} />
            <Route path={'/allApps'} exact component={AllApps} />
            <Route
              path={'/app/:applicationUrl'}
              exact
              render={props => <SingleAppPage {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
  
  )
}

export default App
