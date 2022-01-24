import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'




function LeaderBoard(props) {
    const {users,userRank }= props
    
    var questionsArr = Object.keys(users).map((user)=>users[user].questions.length)
    var answersArr = Object.keys(users).map((user)=>Object.keys(users[user].answers).length)
    var combined = [];
    questionsArr.map((a,index)=>combined.push(answersArr[index]+a))
    
    //   Object.keys(users).map((user,index)=> dispatch(setRank({userId:user,
    //     num:combined[index]
    //   })))
    
    return (
      

        <div>
            <Nav/>
            <br/>
            Leaderboard
            <ul>
                {userRank.map((r,index)=>(
                    
                    <li key={index}>{r}:
                    <img src={users[r].avatarURL} alt=''/>
                        <br/>
                        Score: {combined[index]}
                        {r.id}
                        <br/>
                        No. of asked questions: {questionsArr[index]}
                        <br/>
                        No. of questions answered: {answersArr[index]}
                        <br/>
                        <hr/>
                    </li>
                ))}
               
            </ul>
            
            

            
        </div>
    )
}
function mapStateToProps({users, questions, authedUser}){
    //console.log("Author: ",  users[questions[id].author])
    //console.log("question options: ", questions[questions[id].optionOne.votes.length])
    return{
        users,
        userRank: Object.keys(users).sort((a,b)=>users[b].rank - users[a].rank)
    }
}
export default connect(mapStateToProps)(LeaderBoard)