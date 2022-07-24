import React from "react";
import ShowCards from "./ShowCards";
import Footer from "./Footer";

const deck = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"}, 
    {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"}, 
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"}, 
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões"}, 
    {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"}, 
    {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"}, 
    {question: "Usamos props para __", answer: "passar diferentes informações para componentes"}, 
    {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
];

const cardAnswers = [];
const finalMessageTitle = [];
const finalMessageBody = "";

export default function FlashCards() {
    const shuffledCards = [...deck];
    const cardsList = [];

    const [answerText, setAnswerText] = React.useState([]);
    function getText(text) {
        const array = [...answerText, text];
        setAnswerText(array);
    }

    const [finalTextTitle, setFinalTextTitle] = React.useState([]);
    function finalTextTitle1(element) {
        const array = [...finalTextTitle, element];
        setFinalTextTitle(array);
    }

    function shuffle() { 
        return Math.random() - 0.5; 
    }
    
    function fourCards(array, newArray) {
        for(let i = 0; i < 4; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    shuffledCards.sort(shuffle);
    fourCards(shuffledCards, cardsList);
    
    return (
        <>
            <div className="container">
                <div className="header">
                    <div>
                        <img src="./assets/img/logo-pequeno.png" alt="logo" />
                    </div>
                    <h1>ZapRecall</h1>
                </div>

                <div className="contents">
                    {cardsList.map((card, index) => (<ShowCards 
                        key={index} 
                        id={index} 
                        question={card.question} 
                        answer={card.answer} 
                        cardAnswers={cardAnswers} 
                        getText={getText} 
                        finalMessageTitle={finalMessageTitle} 
                        finalTextTitle1={finalTextTitle1} 
                    />))}
                </div>
            </div>
            <Footer cardAnswers={cardAnswers} finalMessageTitle={finalMessageTitle} />
        </>
    );
}