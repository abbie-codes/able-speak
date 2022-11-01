import './SentenceContainer.css';

function SentenceContainer() {

    const refreshPage = () => {
        window.location.reload();
    }

    const drop = (e) => {
        e.preventDefault();
        const div_id = e.dataTransfer.getData("div_id");
        const block = document.getElementById(div_id);
        e.target.appendChild(block);
    };

    const dragOver1 = (e) => {
        e.preventDefault();
    };

    return (
        <div className="sentence-container">
            <p className="sentence-text">I want</p>
            <div className="empty-div" onDrop={drop}
                onDragOver={dragOver1}
                id="board-1"></div>
            <p className="sentence-text">+</p>
            <div className="empty-div" id="board-2"
                onDrop={drop}
                onDragOver={dragOver1}></div>
            <p className="sentence-text">=</p>
            <button id="microphone"></button>
            <button id="reset" onClick={refreshPage}>Reset</button>
        </div>
    );
}

export default SentenceContainer;