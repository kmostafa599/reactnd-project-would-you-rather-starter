import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends React.Component {
    render() {
        const {authedUser,users} = this.props 
        //console.log("Authed User IMAGE",users[authedUser].avatarURL)
        var circleStyle = {
            padding:10,
            margin:20,
            display:"inline-block",
            // position:'absolute',
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width:100,
            height:100,
            left:0,
            top:0
          };
        return (
            <div > 

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
  <img src={users[authedUser].avatarURL} alt="user avatar" width="30" height="30" className="d-inline-block align-top" style={circleStyle}/>
  </a>
  Hello, {this.props.authedUser}
           
            
            <Link className="nav-link" to="/Dashboard">Dashboard </Link>
            <Link className="nav-link" to="/add">New Question </Link>
            <Link className="nav-link" to="/Leaderboard">LeaderBoard</Link>
            <Link className="nav-link" to="/">Logout</Link>

            <div class="collapse navbar-collapse" id="navbarNav">
    
    
  </div>
</nav>

               



            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){
    return {authedUser,
        users}
    
}

export default connect(mapStateToProps)(Nav)
