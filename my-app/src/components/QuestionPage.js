import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import {connect} from 'react-redux'
import ErrorPage from './ErrorPage';
//import { Nav } from 'react-bootstrap';
class Questionpage extends Component {
    render() {
        console.log(this.props)
        //console.log("Here",this.props.id)
       // const {id,votes} =this.props
       console.log("params: ",this.props.questions.hasOwnProperty(this.props.match.params))
        return (
            <div>
                {/* <Nav/> */}
                
                {/* {questions[this.props.match.params.id].} */}
                {this.props.questions.hasOwnProperty(this.props.match.params.id) ?
                <AnsweredQuestion id={this.props.match.params.id}/>:
                <ErrorPage/>
                 }
                
                
                
            </div>
        );
    }
}

function mapSateToProps({authedUser,questions,users},props){
    //const {id} = props.match.params
    
    return{
        questions

    }
}
export default connect(mapSateToProps)(Questionpage);
