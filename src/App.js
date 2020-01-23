import React,{useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import Navbar  from './components/Navbar'
import { AllApps } from './pages/AllApps'
import { SingleAppPage } from './pages/SingleAppPage'
import { Users } from './pages/Users'
import  SignUp  from './components/SignUp'
import { AppUsers } from './components/AppUsers'


function App() {
const [visible, setVisible]=React.useState(true)



  return (


    <BrowserRouter>
    <Route path={'/registration'} render = {props=> <SignUp setVisible={setVisible}/>}/>
      <Navbar visible={visible} />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/application'} exact component={AllApps} />
          <Route path={'/application/:applicationUrl'} exact render={props => <SingleAppPage {...props} />}
          />
          <Route path={'/user'} exact component={Users} />
          <Route path={'/app-users'} component= {AppUsers}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
