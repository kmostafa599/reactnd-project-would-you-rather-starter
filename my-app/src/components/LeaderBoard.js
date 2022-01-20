import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'



function LeaderBoard(props) {
    const {users,questions,authedUser,userRank}= props
    
        
    return (
        <div>
            <Nav/>
            <br/>
            Leaderboard
            <ul>
                {userRank.map((r)=>(
                    <li>{r}:
                        <br/>
                        Score: {users[r].rank}
                        <br/>
                        No. of asked questions: {users[r].noOfAskedQuestions}
                        <br/>
                        No. of questions answered {users[r].noOfQuestionsAnswered}
                        <br/>
                        <hr/>
                    </li>
                ))}
               
            </ul>
            
            

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
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