import React from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/logo/Logo';
import Grade from './components/Grade/Grade';
import Inputform from './components/Inputform/Inputform';
import Particles from 'react-particles-js';
import Detectionbox from './components/detectionbox/Detectionbox';
import Clarifai from 'clarifai';
import Clear from './components/Clear/Clear';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';



const param = {particles: {
                        line_linked:{
                        enable: true,
                        color:"rgba(255,255,255,0.8)",
                        blur:5
                      }
                    }
};  

 const app = new Clarifai.App({apiKey: 'a988eadd55a54467b66e8155f191bcd7'});   
        

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input:'',
      imgurl:'',
      boxBoundary:{topRow:0,bottomRow:0,leftCol:0,rightCol:0},
      isClicked:false,
      route: 'signin',
      isDetected: false,
      user : {
        id : '',
        name : '',
        password : '',
        email : '',
        submits : 0,
        joined : ''
      }
    };
}
 

  onInputChange = (event)=> {
    this.setState({input:event.target.value});
  }

  
  onButtonSubmit = (event)=>{
    this.setState({imgurl:this.state.input});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then( response=>
    {
      this.setBoundaries(response);
     fetch('https://immense-harbor-45058.herokuapp.com/images',
      {
        method: 'put',
        headers : {'Content-Type' : 'application/json' },
        body : JSON.stringify({
          id : this.state.user.id
        })
    }).then(info => info.json()).then(submits=>this.setState(Object.assign(this.state.user, {submits : submits })))
  })
  }  

  setBoundaries = (boxdata)=>{
   const boundary = boxdata.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('detectedImage');
    const height = image.height;
    const width = image.width;
    const bounds = {
      leftCol : width*boundary.left_col,
      rightCol : width*(1-boundary.right_col),
      topRow : height*boundary.top_row,
      bottomRow : height*(1-boundary.bottom_row)
    }
    this.setState({boxBoundary:bounds});
    this.setState({isClicked:true});
  }

  clearInput = (event)=>{
   const input = document.getElementById('userInput');
   input.value = "";
  }

  onRouteChange = (nextroute)=> {
    this.setState({route:nextroute});
    this.setState({imgurl:'',isDetected:false,isClicked:false});
  }

  loadUser = (user)=> {
    this.setState({user:(user)})
  }

  

render(){
if(this.state.route==='main'){
  return(
    <div className = 'tc'>
    <Particles className='particles' params={param} />
      <Navigation onclick={this.onRouteChange} linktext1='' linktext2 = 'Sign Out' />
      <br/>
      <br/>
      <Logo />
      <br/>
      <br/>
      <br/>
      <Grade name ={this.state.user.name} submits = {this.state.user.submits} isdetected = {this.state.isDetected} id = {this.state.user.id} />
      <br/>
      <br/>
      <br/>
      <Inputform onChange={this.onInputChange} onSubmit = {this.onButtonSubmit} />
      <Clear clickClear ={this.clearInput} />
      <br/>
      <br/>
      <Detectionbox url = {this.state.imgurl} bounds = {this.state.boxBoundary} isClicked={this.state.isClicked} />
      <br/>
      <br/>
    </div>
    );
}
else if(this.state.route === 'signin')
  return(
    <div className ='tc'>
    <Particles className='particles' params={param} />
      <Navigation linktext1='Register' linktext2='Sign In' onclick={this.onRouteChange}/>
    <SignIn onclick = {this.onRouteChange} onLoad = {this.loadUser}/>
    </div>
    );
else if(this.state.route === 'register')
  return(
    <div className ='tc'>
    <Particles className='particles' params={param} />
      <Navigation linktext1='Register' linktext2='Sign In' onclick={this.onRouteChange}/>
    <Register onclick = {this.onRouteChange} onLoad = {this.loadUser} />
    </div>
    );
}
}

export default App;
