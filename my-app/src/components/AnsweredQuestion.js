import React, { Component } from 'react'
import { connect } from 'react-redux'
//import {formatQuestion} from '../utils/_DATA'
import {LinearProgress} from '@mui/material'
//import { yellow } from '@mui/material/colors'
import '@fortawesome/fontawesome-free/css/all.css'
import {Link} from 'react-router-dom'
class Question extends Component {
    handleInputChange(event) {
        
    }
    render() {
        //const {id, timestamp, author, optionOne, optionTwo}= this.props.question
        const {authedUser,users,question} = this.props
        console.log("Question",this.props.question)
        // const handleInputChange = (e) =>{
        //     e.preventDefault()
        //     const target = e.target
        //     const name = target.name
        //     const value = target.value
        //     alert(`${name} ${value}`)
        // }
        var yourVote ={
            backgroundColor:'yellow'
        }
        var notYourVote ={
            backgroundColor:this.props.bgColor
        }
        return (
            <Link to={`/question/${this.props.id}`} >
                <fieldset>
                <legend>{//console.log("user in the component",this.props.user)
                }{this.props.user.name}</legend>
                
                
                <form>
                    <br/>
                    <br/>
                    {console.log("UserAmswers",users[authedUser].answers[question.id])}
                    
                    <ul>
                        <li>
                            <div style={users[authedUser].answers[question.id]==='optionOne'?yourVote:notYourVote} className={users[authedUser].answers[question.id]==='optionOne'?'fas fa-vote-yea':'fal fa-vote-yea'}>
                            <label  for="firstQuestion">{this.props.question.optionOne.text}</label>
                            <div>
                            <LinearProgress variant ="determinate" value={((question.optionOne.votes.length /3) *100).toFixed(1)} />
                                {`${((question.optionOne.votes.length /3) *100).toFixed(1)}%`}<br/>
                                {`${question.optionOne.votes.length } out of 3`}
                                
                            </div> 
                            </div>
                        </li>
                        <hr/>
                        <li>
                        <div style={users[authedUser].answers[question.id]==='optionTwo'?yourVote:notYourVote} className={users[authedUser].answers[question.id]==='optionTwo'?'fas fa-vote-yea':'fal fa-vote-yea'}>
                            <label for='secondQuestion'>{this.props.question.optionTwo.text}</label> 
                            <br/> 
                            <div>      
                            <LinearProgress variant ="determinate" value={((question.optionTwo.votes.length /3) *100).toFixed(1)} />
                                {`${((question.optionTwo.votes.length /3) *100).toFixed(1)}%`}<br/>
                                {`${question.optionTwo.votes.length } out of 3`}
                            </div> 
                            </div>
                        </li>
                    </ul>
                   
                </form>
                <br/>
                </fieldset>
            </Link>

        )
    }
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
export default connect(mapStateToProps)(Question)