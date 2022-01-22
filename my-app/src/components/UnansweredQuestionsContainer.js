import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import Nav from './Nav'


class UnansweredQuestionsContainer extends Component {
    render() {
        const{questionsIds,users,authedUser} = this.props
        const notAnswered = questionsIds.filter((id)=> !Object.keys(users[authedUser].answers).includes(id))
        console.log('Not Answered',notAnswered)
        return (
            <div>
                <Nav/>
                <br/>
                Unanswered Quesitons container
                <ul>
            {notAnswered.map(id=>(
              <li key={id}>
                  
                <Question id={id}/>
              </li>
    ))}
            
                                    

            
          </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {questions,authedUser,users} = state
    return{
        questionsIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp) ,//convert questions to array and sort them
        questions,
        users,
        authedUser,
    }

}

export default connect(mapStateToProps)(UnansweredQuestionsContainer)
