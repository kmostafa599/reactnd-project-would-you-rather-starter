//action type
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SET_RANK = 'SET_RANK'

//action creator

export function setRank({num,userId}){
    return{
        type:SET_RANK,
        userId,
        num
    }
}
export function receiveUsers(users){
   return{
        type:RECEIVE_USERS,//DONT FORGET TO TYPE "type:"
        users,
    }

}