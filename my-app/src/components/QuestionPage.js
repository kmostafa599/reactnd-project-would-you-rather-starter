import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import {connect} from 'react-redux'
import Nav from './Nav';
//import { Nav } from 'react-bootstrap';
class Questionpage extends Component {
    render() {
        console.log(this.props)
        //console.log("Here",this.props.id)
       // const {id,votes} =this.props
       console.log("params: ",this.props.match.params)
        return (
            <div>
                <Nav/>
                Your Answer in Yellow
                <br/>
                <br/>
                {/* {questions[this.props.match.params.id].} */}
                <AnsweredQuestion id={this.props.match.params.id}/>
                
            </div>
        );
    }
}

function mapSateToProps({authedUser,questions,users},props){
    //const {id} = props.match.params
    var allVotes =[]
    //allVotes.push(questions[id].optionOne.votes)
    //allVotes.push(questions[id].optionTwo.votes)
    return{
       // id,
        //votes:allVotes
        questions

    }
}
export default connect(mapSateToProps)(Questionpage);
