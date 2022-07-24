import React from "react";

export default function Footer({cardAnswers, finalMessageTitle}) {
    const answersCounter = cardAnswers.length;
    
    return (
        <div className="footer">
            <div>{finalMessageTitle[0]} {finalMessageTitle[1]}</div>
            <div>{finalMessageTitle[2]}</div>
            <h2>{answersCounter}/4 CONCLUÍDOS</h2>
            <div>{cardAnswers}</div>
        </div>
    );
}