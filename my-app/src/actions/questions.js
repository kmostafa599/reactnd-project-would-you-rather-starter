import { _saveQuestionAnswer } from "../utils/_DATA" 

//action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
//action creators
export function receiveQuestions(questions){
   return{
    type:RECEIVE_QUESTIONS,//DONT FORGET TO TYPE "type:"
    questions,
    }

}

export function saveQuesionAnswer({authedUser, questionID, answer}){
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        questionID,
        answer
    }
}


//Handler
export function handleSaveQuestionAnswer(info){
    return (dispatch)=>{
        dispatch(saveQuesionAnswer(info)) // dispatching the action 
        return _saveQuestionAnswer(info)
        .catch((e)=>{
            console.warn('error in handleSaveQuestionAnswer: ', e)
            dispatch(saveQuesionAnswer(info))
            console.alert('There was an error saving the question')
            
        })
    }
}