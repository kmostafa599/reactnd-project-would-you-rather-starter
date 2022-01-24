import React, { Component } from 'react'
import Question from './Question'

export default class QuestionAsked extends Component {
    render() {
        console.log("params: ",this.props.match.params.id)
        return (
            <div>
                <Question id={this.props.match.params.id}/>
            </div>
        )
    }
}
