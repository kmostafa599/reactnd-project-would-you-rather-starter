import { SAVE_QUESTION_ANSWER } from "../actions/questions";
import { RECEIVE_USERS,SET_RANK } from "../actions/users";

export function users(state={},action){
    console.log(action.type)

    switch(action.type){
        case RECEIVE_USERS:
            return{
            ...state,
            ...action.users,
            }
            
        case SET_RANK:
            return{
                ...state,
                ...state.users[action.userId],
                 rank:action.num   
                
            }
        case SAVE_QUESTION_ANSWER:
            const {qid,answer,authedUser} = action.payload
            return{
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers:{
                        ...state[authedUser].answers,
                        [qid]:answer
                    }
                }
            }    
        default:
            return state;
    }

}