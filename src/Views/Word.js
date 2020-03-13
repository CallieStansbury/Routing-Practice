import React from 'react';


const Word = ({word}) => {
    return(
        <div>
            {isNaN(+word) ? <h1>The Word is {word}</h1> : <h1>The Number is {word}</h1>}
        </div>
    );
}

export default Word;