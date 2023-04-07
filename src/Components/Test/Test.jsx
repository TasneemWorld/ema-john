import React from 'react';

const Test = (props) => {
    
    return (
        <div>
            <h2>Data from Parent Component:</h2>
            <p>{props.data}</p>
        </div>
    );
};

export default Test;