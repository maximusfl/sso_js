import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { AllApps } from './pages/AllApps'
import { SingleAppPage } from './pages/SingleAppPage'
import { Users } from './pages/Users'

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/application'} exact component={AllApps} />
            <Route path={'/application/:applicationUrl'} exact render={props => <SingleAppPage {...props} />}         
            />
             <Route path={'/user'} exact component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
  
  )
}

export default App
