import React, { Component } from 'react'
import ErrorPage from './ErrorPage'
import Question from './Question'
import {connect} from 'react-redux'

class QuestionAsked extends Component {
    render() {
        console.log("params: ",this.props.match.params.id)
        return (
            <div>
                {this.props.questions.hasOwnProperty(this.props.match.params.id) ?
                <Question id={this.props.match.params.id}/>:
                <ErrorPage/>
    }
            </div>
        )
    }
}


function mapSateToProps({authedUser,questions,users},props){
    //const {id} = props.match.params
    
    return{
        questions

    }
}
export default connect(mapSateToProps)(QuestionAsked)