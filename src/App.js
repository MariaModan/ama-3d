import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tabletop from 'tabletop';

import Header from './components/header/Header';
import Pla from './pages/pla/Pla';
import Abs from './pages/abs/Abs';
import AbsT from './pages/abs-t/AbsT';
import Petg from './pages/petg/Petg';
import Marblejet from './pages/marblejet/Marblejet';
import Hips from './pages/hips/Hips';
import Tpe32 from './pages/tpe32/Tpe32';
import Tpe88 from './pages/tpe88/Tpe88';
import PetgCf from './pages/petg-cf/PetgCf';
import Pva from './pages/pva/Pva';
import Pajet from './pages/pajet/Pajet';
import Frjet from './pages/frjet/Frjet';
import PcAbs from './pages/pc-abs/PcAbs';

import './App.css';
import sheetKey from './sheetKey'

class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      shopData: [],
      categories: []
    }
  }

  componentDidMount(){
    Tabletop.init({
        key: sheetKey,
        callback: googleData => {
          console.log('google sheet data --->', googleData)
          let arr = []
          googleData.map( item => { 
            if(arr.indexOf(item.title.toLowerCase()) === -1){
              arr.push(item.title.toLowerCase());
            }
          })

          this.setState({
            shopData: googleData,
            categories: arr
          })
        },
        simpleSheet: true
      })
}

  render() {
    return (
      <div className="App">
        <Header categories={this.state.categories}/>
        <Switch>
          <Route exact path='/pla' component={Pla}/>
          <Route exact path='/abs' component={Abs}/>
          <Route exact path='/abs-t' component={AbsT}/>
          <Route exact path='/petg' component={Petg}/>
          <Route exact path='/marblejet' component={Marblejet}/>
          <Route exact path='/hips' component={Hips}/>
          <Route exact path='/tpe32' component={Tpe32}/>
          <Route exact path='/tpe88' component={Tpe88}/>
          <Route exact path='/pc-abs' component={PcAbs}/>
          <Route exact path='/pva' component={Pva}/>
          <Route exact path='/petg-cf' component={PetgCf}/>
          <Route exact path='/pajet' component={Pajet}/>
          <Route exact path='/frjet' component={Frjet}/>
          {/* {this.state.categories.map( (category, index) => {
              return <Route exact path={`/${category}`} key={index} component={`${category.charAt(0).toUpperCase() + category.slice(1)}`}/>
          })} */}
        </Switch>
      </div>
    );
  }
  
}

export default App;
