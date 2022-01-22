import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA" 

//action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'
//action creators

export function saveQuestion(question){
    return {
        type:SAVE_QUESTION,
        question
    }

}
export function receiveQuestions(questions){
   return{
    type:RECEIVE_QUESTIONS,//DONT FORGET TO TYPE "type:"
    questions,
    }

}

export function saveQuesionAnswer({authedUser, qid, answer}){
    return {
        type: SAVE_QUESTION_ANSWER,
        payload:
        {authedUser,
        qid,
        answer}
    }
}


//Handler (async action creators)

export function handleSaveQuestion(optionOne, optionTwo){
    console.log(optionOne)
    return (dispatch, getState)=>{
        const {authedUser} = getState()
        return _saveQuestion({
            author:authedUser,
            optionOneText:optionOne,
            optionTwoText:optionTwo,
        }).then((question)=>dispatch(saveQuestion(question)))
    }
}

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