import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'
import AnsweredQuestion from './AnsweredQuestion'

class AnsweredQuestionsContainer extends Component {
    render() {
        const {users,authedUser}=this.props
        return (
            <div>
                <Nav/>
                <br/>
                Answered Quesitons Container
                <br/>
                
                Your Vote in yellow

                <ul>
            {Object.keys(users[authedUser].answers).map(id=>(
              <li key={id}>
                  
                <AnsweredQuestion id={id}/>
              </li>
    ))}
            
                                    

            
          </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {questions,users,authedUser} = state
    return{
        questionsIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp) ,//convert questions to array and sort them
        users,
        authedUser
    }

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)