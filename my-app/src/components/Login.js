import React ,{useState}from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {Link} from 'react-router-dom'


function Login (props){
    const [option,setOption] = useState(props.authedUser)
    const handleChange= (e)=>{ 
        e.preventDefault()
        const {dispatch} = props
        
        
        dispatch(setAuthedUser(e.target.value))
        setOption(e.target.value)
    }
    
        return (
            <div>
                <form>
                    <fieldset>
                    <legend>Login</legend>
                    <select
                     value={option}
                     onChange={handleChange}>
                        {props.users.map((user,i)=>(
                            <option value={user} key={i} > {user} </option>
                        ))}
                    </select>
                    <Link to ='/Dashboard'>
                        submit
                    </Link>
                    </fieldset>
                    
                </form>
                

            </div>
        )
    
}

function mapStateToProps({authedUser,users}){
    return {authedUser:JSON.stringify(authedUser),
        users:Object.keys(users)}
    
}

export default connect(mapStateToProps)(Login)