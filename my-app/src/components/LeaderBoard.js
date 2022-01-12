import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

function LeaderBoard(props) {
    const {users,questions,authedUser}= this.props
    return (
        <div>
            <Nav/>
            <br/>
            Leaderboard


        </div>
    )
}
function mapStateToProps({users, questions, authedUser},{id}){
    console.log("Author: ",  users[questions[id].author])
    console.log("question options: ", questions[questions[id].optionOne.votes.length])
    return{

        question:questions[id],
        user:users[questions[id].author],
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(LeaderBoard)