import React from "react";

let containsRedIcon = false;

export default function ShowCards(props) {
    const {id, question, answer, cardAnswers, getText, finalMessageTitle, finalTextTitle1} = props;

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
                <img src="./assets/img/setinha.png" onClick={flipCard} alt="virar"/>
            </div>
        );
    }

    function answerChosen(text) {
        if(text === "close-circle") {
            containsRedIcon = true;
            cardAnswers.push(<span className="red"><ion-icon name={text}></ion-icon></span>);
            getText(text);
            setCard(
                <div className="card-title red">
                    <h3>Pergunta {id + 1}</h3>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            );
        } else if(text === "help-circle") {
            cardAnswers.push(<span className="orange"><ion-icon name={text}></ion-icon></span>);
            getText(text);
            setCard(
                <div className="card-title orange">
                    <h3>Pergunta {id + 1}</h3>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            );
        } else if(text === "checkmark-circle") {
            cardAnswers.push(<span className="green"><ion-icon name={text}></ion-icon></span>);
            getText(text);
            setCard(
                <div className="card-title green">
                    <h3>Pergunta {id + 1}</h3>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            );
        }

        if((cardAnswers.length === 4) && (containsRedIcon === true)) {
            finalMessageTitle.push(<img src="./assets/img/sad.png" alt="sad" />);
            finalMessageTitle.push(<strong>Putz...</strong>);
            finalMessageTitle.push(<p>Ainda faltam alguns... Mas não desanime!</p>);
            finalTextTitle1();
        } else if((cardAnswers.length === 4) && (containsRedIcon === false)) {
            finalMessageTitle.push(<img src="./assets/img/party.png" alt="sad" />);
            finalMessageTitle.push(<strong>Parabéns!</strong>);
            finalMessageTitle.push(<p>Você não esqueceu de nenhum flashcard!</p>);
            finalTextTitle1();
        }
    }

    function flipCard() {
        setCard(
            <div className="answer">
                <h2>{answer}</h2>

                <div className="card-buttons">
                    <div onClick={() => answerChosen("close-circle")}>Não lembrei</div>
                    <div onClick={() => answerChosen("help-circle")}>Quase não lembrei</div>
                    <div onClick={() => answerChosen("checkmark-circle")}>Zap!</div>
                </div>
            </div>
        );
    }

    return (
        <>
            {card}
        </>
    );
}