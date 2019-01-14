import React, { Component } from 'react';
import Todo from './Todo'

class List extends Component{
    render(){
        const listDisplay = this.props.arr.map((element, i) => (
            <div key={i}>
                {element}
            </div>
        ))

        return(
            <div>
                <h4>{listDisplay}</h4>
            </div>
        )
    }
}

export default List;