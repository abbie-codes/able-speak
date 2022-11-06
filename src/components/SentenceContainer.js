import './SentenceContainer.css';

function SentenceContainer(props) {

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

    function saySentence() {

        const getCardIds = () => {
            const boardOne = document.getElementById('board-1');
            const cardOne = boardOne.children;
            const idOne = cardOne[0].id;
            const boardTwo = document.getElementById('board-2');
            if(boardTwo.children.length > 0) {
                const cardTwo = boardTwo.children;
                const idTwo = cardTwo[0].id;
                return idOne + ' and ' + idTwo;
            } else {
                return idOne;
            }
            
        }
        const msg1 = new SpeechSynthesisUtterance();
        msg1.text = 'I ' + (props.verb);
        window.speechSynthesis.speak(msg1);
        

        const msg = new SpeechSynthesisUtterance();
        msg.text = getCardIds();
        window.speechSynthesis.speak(msg);
        
    }

        return (
            <div className="sentence-container">
                <p className="sentence-text">I {props.verb}</p>
                <div className="empty-div" onDrop={drop}
                    onDragOver={dragOver1}
                    id="board-1"></div>
                <p className="sentence-text">+</p>
                <div className="empty-div" id="board-2"
                    onDrop={drop}
                    onDragOver={dragOver1}></div>
                <p className="sentence-text">=</p>
                <button id="microphone" data-testid="mic_button" onClick={() => { saySentence() }}></button>
                <button id="reset" data-testid="reset-button" onClick={refreshPage}>Reset</button>
            </div>
        );
    }

export default SentenceContainer;
    