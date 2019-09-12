import React from "react";

const NasaCard = props => {
    return (
    <div>
        <h1>NASA Photo of the Day</h1>
        <h2>{props.title}</h2>
        <p>{props.explanation}</p>
        <img className = "img" src ={props.hdurl} alt="Nasa Photo of the Day"/>
        <h3>{props.date}</h3>
    </div>
    );
};

export default NasaCard;