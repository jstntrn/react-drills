import React, { Component } from 'react';

class Todo extends Component{
    render(){
        this.props.arr
        const listDisplay = this.props.arr.map((element, i) => (
            <div key={i}>
                <h3>{element}</h3>
            </div>
        ))

        return(
            <div>
                {listDisplay}
            </div>
        )
    }
}

export default Todo;