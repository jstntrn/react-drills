import React from 'react';
import Todo from './Todo'

//functional component
//receives props from App.js parent
//maps through array
//sends element props to Todo.js child and gets back <p></p>
//returns display back to parent

export default function List(props){
    let listDisplay = props.arr.map((element, i) => {
        return (
            <Todo key={i} item={element}/>
        )
    })

    return(
        <div>
            {listDisplay}
        </div>
    )
}