import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Residential from './Residential'
import Commercial from './Commercial'
import RoofLeasing from './RoofLeasing'
import Utilities from './Utilities'
import Contact from './Contact'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const Routes = (props) => {

  const handleItemClick = props.handleItemClick

  const homeComponent = (props) => {
    return (
      <Home
        handleItemClick={handleItemClick}
        {...props}
      />
    )
  }

  return (
    <div className='main'>
      <Route exact path="/" render={homeComponent} history={history}/>
      <Route path="/residential" component={Residential} history={history}/>
      <Route path="/commercial" component={Commercial} history={history}/>
      <Route path="/roofleasing" component={RoofLeasing} history={history}/>
      <Route path="/utilities" component={Utilities} history={history}/>
      <Route path="/Contact" component={Contact} history={history}/>
    </div>
  )
}



export default Routes
