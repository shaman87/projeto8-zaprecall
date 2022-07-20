import React from "react";

export default function Cards(props) {
    const {id, question, answer} = props;

    const [card, setCard] = React.useState(
        <div className="card-title" onClick={showQuestion}>
            <h3>Pergunta {id + 1}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );

    function showQuestion() {
        setCard(
            <div className="question">
                <h2>{question}</h2>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
        );
    }

    return (
        <>
            {card}
        </>
    );
}