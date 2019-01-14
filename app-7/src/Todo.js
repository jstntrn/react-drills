import React from 'react';

//functional component
//receives key and item from List.js parent as props
//returns div with item displayed in <p></p>
export default function Todo(props){
    return(
        <div>
            <h4>{props.item}</h4>
        </div>
    )
}

