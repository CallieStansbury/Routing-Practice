import React from 'react';

const Color = ({word, backgroundColor, color}) => {
    const BackgroundStyle = {
        background: backgroundColor,
        height: "150px",
    }
    return(
        <div style= {BackgroundStyle}>
            <h1 style={{ color:color, padding: "55px" }}> The word is {word} </h1>
        </div>
    );
}

export default Color;