import React, { Component } from 'react'

class NewTask extends Component{
    constructor(){
        super()
        
        this.state = {
            userInput: ''
        }
    }

    handleUpdate(value){
        this.setState({
        userInput: value
        })        
    }

    render(){
        return(
            <div>
                <input 
                onChange = { (e) => this.handleUpdate(e.target.value) }
                value = {this.state.userInput}/>
                <button
                onClick = { () => this.props.method(this.state.userInput) }>Add</button>
            </div>
        )
    }
}

export default NewTask;