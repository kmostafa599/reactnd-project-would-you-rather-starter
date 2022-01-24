import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class AnsweredQuestionsContainer extends Component {
    render() {
        const {users,authedUser,questions}=this.props
        return (
            <div>
                
                <br/>
                {//Answered Quesitons Container
                }
                <br/>
                
                {/* Your Vote in yellow */}

                <ul>
            {Object.keys(users[authedUser].answers).map(id=>(
              <li key={id}>
                  
                  <label  htmlFor="firstQuestion">{questions[id].optionOne.text}</label>
                  <br/>
                  <label htmlFor='secondQuestion'>{questions[id].optionTwo.text}</label> 
                  <Link to={`/questions/${id}`}>Results</Link>
                  <br/>
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
        authedUser,
        questions,
        
    }

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)