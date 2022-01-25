import React,{Component} from 'react'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import {  Route } from 'react-router-dom';
import AnsweredQuestionsContainer from './AnsweredQuestionsContainer';
import UnansweredQuestionsContainer from './UnansweredQuestionsContainer';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import QuestionPage from './QuestionPage';
//import Question from './Question';
import QuestionAsked from './QuestionAsked';
//import Nav from './Nav';
class App extends Component {
  componentDidMount(){
    //this.props is the store
    this.props.dispatch(handleInitialData())//handleIntialData() is the action
  }
  
  render(){
    return (

      <div className='app'>
         
        <Route exact path="/">
        <Login/>
        </Route>
        
        <Route path="/Dashboard" render={()=>(<Dashboard  />)}></Route>
        <Route path="/Answered Quesitons" render={()=>(<AnsweredQuestionsContainer/>)}></Route>
        <Route path="/Unanswered Quesitons" render={()=>(<UnansweredQuestionsContainer/>)}></Route>
        <Route path="/add" render={()=>(<NewQuestion/>)}></Route>
        <Route path="/leaderboard" render={()=>(<LeaderBoard/>)}></Route>
        <Route path="/question/:id" render={(props)=>(<QuestionPage {...props}/>)}></Route>
        <Route path="/questions/:id" render={(props)=>(<QuestionAsked {...props}/>)}></Route>

        </div>
    );
  }

} 

export default connect()(App);
