import React,{Component} from 'react'
import { connect } from 'react-redux';
//import Question from './Question';
import Login from './Login';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//import { handleInitialData } from '../actions/shared'
import QuestionPage from './QuestionPage'

class Dashboard extends Component {
  

  render(){
    console.log('questions:',this.props.questionsIds)
    // eslint-disable-next-line no-lone-blocks
    {if (this.props.authedUser === ''){return <Login/> }
    return (
      
      <div >
        <Nav/>
        <br/>
        <br/>
        Dashboard
        <div id='Nav'style={{display:'flex',justifyContent:'center'}}>
        <Link to="/Answered Quesitons"><button>Answered Quesitons </button></Link>
        
        <Link to="/Unanswered Quesitons"><button>Unanswered Quesitons</button></Link>
        </div>
        <QuestionPage match={{params:{id:'6ni6ok3ym7mf1p33lnez'}}}/>



      </div>
  );
  }
  }
}

function mapStateToProps(state){
  const {questions} = state
  const {authedUser} = state
 return{
     questionsIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp) ,//convert questions to array and sort them
     authedUser  
    }
}

export default connect(mapStateToProps)(Dashboard);
