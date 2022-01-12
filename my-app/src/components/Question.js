import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/_DATA'

class Question extends Component {
    handleInputChange(event) {
        
    }
    render() {
        const {id, timestamp, author, optionOne, optionTwo}= this.props.question
        console.log("Question",this.props.question)
        const handleInputChange = (e) =>{
            e.preventDefault()
            const target = e.target
            const name = target.name
            const value = target.value
            alert(`${name} ${value}`)
        }
        return (
            <div>
                <div>{//console.log("user in the component",this.props.user)
                }{this.props.user.name}</div>
                <form>
                <select>
                        <option value={this.props.question.optionOne.text}>{this.props.question.optionOne.text}</option>
                        <option value={this.props.question.optionTwo.text}>{this.props.question.optionTwo.text}</option>
                    </select>
                    <input 
                        
                        type="radio"
                        onChange={handleInputChange}
                        id ='firstQuestion'
                        value={this.props.question.optionOne.text}
                        name={this.props.question.optionOne.text}
                        checked={this.props.question.optionOne.text==this.props.question.optionOne.text}
                    />  
                    <label for="firstQuestion">{this.props.question.optionOne.text}</label>
                    <br/>

                    
                    <input
                        
                        type="radio"
                        onChange={handleInputChange}
                        id='secondQuestion'
                        value={this.props.question.optionTwo.text}
                        name={this.props.question.optionTwo.text}
                        checked={this.props.question.optionTwo.text==this.props.question.optionTwo.text}
                    /> 
                    <label for='secondQuestion'>{this.props.question.optionTwo.text}</label> 
                    
                    <br/>       
                    <button>Submit </button>    
                </form>
                <br/>
            </div>

        )
    }
}
function mapStateToProps({users, questions, authedUser},{id}){
    console.log("Author: ",  users[questions[id].author])
    return{

        question:questions[id],
        user:users[questions[id].author]
       ,
    }
}
export default connect(mapStateToProps)(Question)