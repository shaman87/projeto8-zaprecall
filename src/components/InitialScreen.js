import React from "react";
import FlashCards from "./Flashcards.js";

export default function InitialScreen() {
    function loadFlashcard() {
        setScreen(<FlashCards />);
    }

    const [screen, setScreen] = React.useState(
        <div className="container">
            <div className="initial-screen">
                <div>
                    <img src="./assets/img/logo.png" alt="logo" />
                </div>

                <h1>ZapRecall</h1>

                <div className="button" onClick={loadFlashcard}>Iniciar Recall!</div>
            </div>
        </div>
    );

    return (
        <>
            {screen}
        </>
    );
}