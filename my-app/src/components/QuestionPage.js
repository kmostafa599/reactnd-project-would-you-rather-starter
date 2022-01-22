import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import {connect} from 'react-redux'
class Questionpage extends Component {
    render() {
        return (
            <div>
                <AnsweredQuestion id={this.props.id}/>
            </div>
        );
    }
}

function mapSateToProps({authedUser,questions,users},props){
    const {id} = props.match.params
    return{
        id,


    }
}
export default connect(mapSateToProps)(Questionpage);
