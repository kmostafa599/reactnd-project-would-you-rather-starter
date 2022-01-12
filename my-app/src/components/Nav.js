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
            <div style={{display:'flex',justifyContent:'center'}}> 
               Hello, {this.props.authedUser}
            <div><img src={users[authedUser].avatarURL} alt="user avatar"  style={circleStyle}/></div>
            <Link to="/"><button>Logout</button></Link>
            <Link to="/Dashboard"><button>Dashboard </button></Link>
            <Link to="/add"><button>New Question </button></Link>
            <Link to="/Leaderboard"><button>Leaderboard </button></Link>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){
    return {authedUser,
        users}
    
}

export default connect(mapStateToProps)(Nav)
