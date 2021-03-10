import React, {Component} from 'react';
import logo from './logo.svg';
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
      fetch('https://52.254.103.29:8080/users/find')
          .then(response => response.json())
          .then(data => {
              let userList = [];
              data.items.forEach(function (user) {
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
