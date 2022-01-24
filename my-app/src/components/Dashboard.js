import React,{useState} from 'react'
import { connect } from 'react-redux';
//import Question from './Question';
import Login from './Login';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//import { handleInitialData } from '../actions/shared'
import QuestionPage from './QuestionPage'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AnsweredQuestion from './AnsweredQuestion';
import Question from './Question';
import AnsweredQuestionsContainer from './AnsweredQuestionsContainer';
import UnansweredQuestionsContainer from './UnansweredQuestionsContainer';

function Dashboard (props) {
  

  const [key, setKey] = useState('unansweredQuestions');

    console.log('questions:',props.questionsIds)
    // eslint-disable-next-line no-lone-blocks
    {if (props.authedUser === ''){return <Login/> }
    return (
      
      <div >
        <Nav/>
        <br/>
        <br/>
        
  {/* <QuestionPage match={{params:{id:'xj352vofupe1dqz9emx13r'}}}/> */}
        <Tabs
      id="controlled-tab-example"
      
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="container mb-3"
    >
      <Tab eventKey="unansweredQuestions" title="Unanswered questions">
        <UnansweredQuestionsContainer/>
      </Tab>
      <Tab eventKey="answeredQuestions" title="Answered questions">
        <AnsweredQuestionsContainer/>
      </Tab>
    
    </Tabs>
        {/* Dashboard */}
        
        {//<QuestionPage match={{params:{id:'6ni6ok3ym7mf1p33lnez'}}}/>
        }



      </div>
  );
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
