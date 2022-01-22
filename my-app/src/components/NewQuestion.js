import React from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'
//import {formatQuestion} from '../utils/_DATA'
import {useState} from 'react'
import {handleSaveQuestion} from '../actions/questions' 


function NewQuestion(props) {
    //const {users,authedUser} = props
    const [optionOne,setOptionOne] = useState('')
    const [optionTwo,setOptionTwo] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        const {dispatch} = props
        dispatch(handleSaveQuestion(optionOne,optionTwo))
        setOptionOne('')
        setOptionTwo('')
    }
    return (
        <div>
            <Nav/>
            <br/>
            Ask new question
            <form onSubmit={submitHandler}>
                <label htmlFor="optionOne">
                    Question?
                    <input
                        id='optionOne'
                        value={optionOne}
                        type="text"
                        onChange={(e)=> setOptionOne(e.target.value)}/>
                </label>
                <label htmlFor="optionTwo">
                    Question?
                    <input
                        id='optionTwo'
                        value={optionTwo}
                        type="text"
                        onChange={(e)=> setOptionTwo(e.target.value)}/>
                </label>
                <input type="submit" />
            </form>
            
        </div>
    )
}

function mapStateToProps({users, questions, authedUser},{id}){
    //console.log("Author: ",  users[questions[id].author])
    //console.log("question options: ", questions[questions[id].optionOne.votes.length])
    return{

        question:questions[id],
        //user:users[questions[id].author],
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(NewQuestion)