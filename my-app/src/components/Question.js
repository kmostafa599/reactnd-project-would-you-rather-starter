import React, {  useState } from 'react'
import { connect } from 'react-redux'
//import {formatQuestion} from '../utils/_DATA'
import {handleSaveQuestionAnswer} from '../actions/questions'

function Question(props) {
    
    
        //const {id, timestamp, author, optionOne, optionTwo}= props.question
        console.log("Question id",props.question.id)
        const [option,setOption] = useState('')
        // const handleInputChange = (e) =>{
        //     e.preventDefault()
        //     const target = e.target
        //     const name = target.name
        //     const value = target.value
        //     alert(`${name} ${value}`)
        // }

        const submitHandler = (e)=>{
            e.preventDefault()
            console.log('THIS OPTION',option)
            const {dispatch,authedUser} = props
            dispatch(handleSaveQuestionAnswer({
                qid:props.question.id,
                authedUser,
                answer: option,
                


            }))
        }
        return (
            <div>
                <div>{//console.log("user in the component",this.props.user)
                }{props.user.name}</div>
                <form onSubmit={submitHandler}>
                <select value='optionOne' onChange={(e)=>setOption(e.target.value)}>
                        <option value='optionOne'>{props.question.optionOne.text}</option>
                       
                    <br/>
                        <option value='optionTwo'>{props.question.optionTwo.text}</option>
                    </select>
                     
                    

                
                    
                    
                    <br/>       
                    <input type="submit" />    
                </form>
                <br/>
            </div>


        )
    
}
function mapStateToProps({users, questions, authedUser},{id}){
    console.log("Author: ",  users[questions[id].author])
    return{

        question:questions[id],
        user:users[questions[id].author],
        authedUser
    }
}
export default connect(mapStateToProps)(Question)