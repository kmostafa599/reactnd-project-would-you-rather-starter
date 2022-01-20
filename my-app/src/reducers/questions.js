import { RECEIVE_QUESTIONS,SAVE_QUESTION_ANSWER, SAVE_QUESTION } from "../actions/questions";
import { authedUser } from "./authedUser";

export function questions(state={},action){
    console.log(action.type)
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
            ...state,
            ...action.questions,
            }
        case SAVE_QUESTION_ANSWER:
            return{
                ...state,
                authedUser: {
                    ...state[action.authedUser],
                      answer: {
                      ...state[action.authedUser].answers,
                      qid: action.answer
                    }
                  },
                qid: {
                  ...state[action.qid],
                  answer: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([authedUser])
                  }
                },
                
      }
               
        case SAVE_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }    
        default:
            return state;
    }

}