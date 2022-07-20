export default function Cards(props) {
    return (
        <div className="question">
            <h3>{props.question}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}