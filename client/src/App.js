import React, { Component } from 'react';
import Menu from './Menu2'
import SmallMenu from './SmallMenu'
import {  Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'
import Routes from './Routes'
import Footer from './Footer'
import MediaQuery from 'react-responsive'
import './App.css';

const history = createHistory()
//Google analytics
ReactGA.initialize('UA-104517028-1')

history.listen((location, action) => {
  console.log('history listen')
  ReactGA.set({ page: location.pathname})
  ReactGA.pageview(location.pathname)
})

class App extends Component {

  constructor(props){
    super(props)
    this.state = {location: '/'}
    this.getLocation = this.getLocation.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }


  setLocation(name){
    const location = name ? name : this.getLocation()
    this.setState({location})
  }

  componentWillMount(){
    this.setLocation()
    history.listen((location, action) => {
      console.log('history listen')
      const dropdownMenu = document.querySelector('.menu.transition.visible')
      if (dropdownMenu)
        {
          dropdownMenu.classList.remove('visible')
        }
      ReactGA.set({ page: location.pathname})
      ReactGA.pageview(location.pathname)
    })

  }

  componentDidMount(){

  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MediaQuery query='(min-width: 801px)'>
            <Menu handleItemClick={this.setLocation} location={this.state.location}/>
          </MediaQuery>
          <MediaQuery query='(max-width: 800px)'>
            <SmallMenu handleItemClick={this.setLocation} location={this.state.location}/>
          </MediaQuery>
          <Routes handleItemClick={this.setLocation}/>
          <Footer handleItemClick={this.setLocation}/>
        </div>
      </Router>
    );
  }

  getLocation() {
    console.log(this.props.location)
    const loc = this.props.location
    return
  }
}



export default App;
