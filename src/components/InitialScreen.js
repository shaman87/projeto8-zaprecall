import React from "react";
import FlashCards from "./Flashcards.js";
import logo from "../components/assets/img/logo.png";

export default function InitialScreen() {
    function loadFlashcard() {
        setScreen(<FlashCards />);
    }

    const [screen, setScreen] = React.useState(
        <div className="container">
            <div className="initial-screen">
                <div>
                    <img src={logo} alt="logo" />
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