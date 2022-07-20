import React from "react";
import FlashCards from "./Flashcards.js";

export default function TelaInicial() {
    const [tela, setTela] = React.useState(
        <div className="container">
            <div className="initial-screen">
                <div>
                    <img src="./assets/img/logo.png" alt="logo" />
                </div>

                <h1>ZapRecall</h1>

                <div className="button" onClick={carregarFlashcard}>Iniciar Recall!</div>
            </div>
        </div>
    );

    function carregarFlashcard() {
        setTela(<FlashCards />);
    }

    return (
        <>
            {tela}
        </>
    );
}