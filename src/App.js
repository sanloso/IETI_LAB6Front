import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          userList: []
      };
  }

  componentDidMount() {
      fetch('https://52.232.228.201:8080/users/find')
          .then(response => response.json())
          .then(data => {
              let userList = [];
              data.forEach(function (user) {
                  userList.push({user})

              });
              this.setState({userList: userList});
          });
  }

  render() {
      return (
          <div>
              <UserList userList={this.state.userList}/>
          </div>
      );
  }
}

export default App;
