// import React, { Component } from 'react';
// import Signin from'./Com/SiginUp'

// export default class App extends Component {
  
//   render() {
//     return (
// <Signin/>
//     );
//   }
// }








import React, { Component } from 'react';
import {Router,Stack,Scene, Actions} from"react-native-router-flux"
import Signin from './Com/Signin';
import Signup from './Com/SiginUp';
import Profile from './Com/Profile';
import Camera from './Com/camera';
import Post from './Com/Post';
import ContactListView from './Com/ContactListView';
export default class App extends Component {
  
  render() {
    return (
      <Router>
        <Scene key="root">
        <Scene key="Signin" initial component={Signin}  hideNavBar title="Login"/>
        <Scene key="Signup" component={Signup} hideNavBar title="Register"/>
        <Scene key="Profile" hideNavBar component={Profile}/>
        <Scene key="Contact" hideNavBar component={ContactListView}/>
        <Scene key="Post" hideNavBar component={Post}/>
        <Scene key="Camera" hideNavBar component={Camera}/>
        </Scene>
      </Router>
    );
  }
}
