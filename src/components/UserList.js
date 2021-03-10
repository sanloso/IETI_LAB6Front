import React from 'react'

class UserList extends React.Component{

    render(){
        const {userList} = this.props;
        const value = userList.map((user)=>{

            return(<div key={user.username}>
            <h2>Username: {user.username}</h2>
            <h3>Password: {user.password}</h3>
            <br/>
            </div>)});
        return(
            <div>
            {value}
            </div>
        )
    }

};

export default UserList;