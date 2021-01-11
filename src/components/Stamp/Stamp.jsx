import React from 'react';

const Stamp = ({stamp, text, index, onClick}) => {
    console.log(onClick)
    return(
        <>
            <img src={stamp} alt={text} onClick={(e) => onClick(e, text)}/>
            <span className="cars__stamp__text">{text}</span>
        </>
    )
};

export default Stamp;