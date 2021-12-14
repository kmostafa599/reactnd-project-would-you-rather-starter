import React, { Component } from 'react'

export default class NewQuestion extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text"/>   
                    </label>
                    <br/>
                    <label>
                        <input type="text" onChange={this.handleInputChange}/>
                        
                    </label>
                    <br/>            
                    <button onClick={this.handleInputChange}>
                        Submit Answer
                    </button>
                </form>
                <br/>
            </div>
        )
    }
}
