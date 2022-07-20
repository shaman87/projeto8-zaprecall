import React from "react";
import FlashCards from "./Flashcards.js";

export default function InitialScreen() {
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

    function loadFlashcard() {
        setScreen(<FlashCards />);
    }

    return (
        <>
            {screen}
        </>
    );
}