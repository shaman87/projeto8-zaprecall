import React from "react";

export default function Footer({cardAnswers}) {
    const answersCounter = cardAnswers.length;
    
    return (
        <div className="footer">
            <h2>{answersCounter}/4 CONCLUÍDOS</h2>
            <div>{cardAnswers}</div>
        </div>
    );
}