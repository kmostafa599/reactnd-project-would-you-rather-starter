import React, {  useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//import {formatQuestion} from '../utils/_DATA'
import {handleSaveQuestionAnswer} from '../actions/questions'
import Nav from './Nav'

function Question(props) {
    
    
        //const {id, timestamp, author, optionOne, optionTwo}= props.question
        console.log("Question id",props.question.id)
        const [option,setOption] = useState('optionOne')
        const [flag,setFlag] = useState(false)
       

        const submitHandler = (e)=>{
            e.preventDefault()
            console.log('THIS OPTION',option)
            const {dispatch,authedUser} = props
            setFlag(true)
            dispatch(handleSaveQuestionAnswer({
                qid:props.question.id,
                authedUser,
                answer: option,
                


            }))
            
        }
        if(flag===true){return <Redirect to="/Dashboard"/>}
        return (
            <div>
                <Nav/>
                <div>{//console.log("user in the component",this.props.user)
                }{props.user.name}</div>
                <div><img src={props.user.avatarURL} alt=''/></div>
                Would you Rather?
                <form onSubmit={submitHandler}>
                {/* <select value={option} onChange={(e)=>setOption(e.target.value)}> */}
                <div >
                        <input type='radio'  value='optionOne' onChange={(e)=>{setOption(e.target.value);}} checked={option==='optionOne'}/>
                        <label htmlFor='optionOne'>{props.question.optionOne.text}</label> 
                        {/* {props.question.optionOne.text} */}
                        <br/>
                        <input type='radio'  value='optionTwo' onChange={(e)=>{setOption(e.target.value);}} checked={option==='optionTwo'}/>
                        <label htmlFor='optionTwo'>{props.question.optionTwo.text}</label> 
                        {/* {props.question.optionTwo.text} */}
                    {/* </select> */}
                    </div>
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