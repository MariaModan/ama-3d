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
      shopData: []
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
            shopData: googleData
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
          <Route 
            exact path='/pla' 
            render={(props) => <Pla {...props} products={this.state.shopData.filter(data => data.title ==='PLA')} />}/>
          <Route 
            exact path='/abs' 
            render={(props) => <Abs {...props} products={this.state.shopData.filter(data => data.title ==='ABS')} />}/>
          <Route 
            exact path='/abs-t' 
            render={(props) => <AbsT {...props} products={this.state.shopData.filter(data => data.title ==='ABS-T')} />}/>
          <Route 
            exact path='/petg' 
            render={(props) => <Petg {...props} products={this.state.shopData.filter(data => data.title ==='PETG')} />}/>
          <Route 
            exact path='/marblejet' 
            render={(props) => <Marblejet {...props} products={this.state.shopData.filter(data => data.title ==='MARBLEJET')} />}/>
          <Route 
            exact path='/hips' 
            render={(props) => <Hips {...props} products={this.state.shopData.filter(data => data.title ==='HIPS')} />}/>
          <Route 
            exact path='/tpe32' 
            render={(props) => <Tpe32 {...props} products={this.state.shopData.filter(data => data.title ==='TPE32')} />}/>
          <Route 
            exact path='/tpe88' 
            render={(props) => <Tpe88 {...props} products={this.state.shopData.filter(data => data.title ==='TPE88')} />}/>
          <Route 
            exact path='/pc-abs' 
            render={(props) => <PcAbs {...props} products={this.state.shopData.filter(data => data.title ==='PC-ABS')} />}/>
          <Route 
            exact path='/pva' 
            render={(props) => <Pva {...props} products={this.state.shopData.filter(data => data.title ==='Pva')} />}/>
          <Route 
            exact path='/petg-cf' 
            render={(props) => <PetgCf {...props} products={this.state.shopData.filter(data => data.title ==='PETG/CF')} />}/>
          <Route 
            exact path='/pajet' 
            render={(props) => <Pajet {...props} products={this.state.shopData.filter(data => data.title ==='PAJET')} />}/>
          <Route 
            exact path='/frjet' 
            render={(props) => <Frjet {...props} products={this.state.shopData.filter(data => data.title ==='FRJET')} />}/>
          {/* {this.state.categories.map( (category, index) => {
              return <Route exact path={`/${category}`} key={index} component={`${category.charAt(0).toUpperCase() + category.slice(1)}`}/>
          })} */}
        </Switch>
      </div>
    );
  }
  
}

export default App;
