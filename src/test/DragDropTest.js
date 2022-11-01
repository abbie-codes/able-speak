import background from '../img/yellow-background.jpg';
import '../test/DragDropTest.css';
import '../components/Header_Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';

function DragDropTest() {
    const cards = [
        { title: 'FOOD & DRINKS', img: "https://img.icons8.com/color/96/000000/tomato.png" },
        { title: 'ACTIVITIES', img: "test" },
        { title: 'NEEDS', img: "test" },
        { title: 'EMOTIONS', img: "test" }
    ]

    const drop = (e) => {
        e.preventDefault();
        const div_id = e.dataTransfer.getData("div_id");
        const block = document.getElementById(div_id);
        e.target.appendChild(block);
    };

    const dragOver1 = (e) => {
        e.preventDefault();
    };

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("div_id", target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="App">
            <Header />

            <main className="Drag-Drop-main" style={{ backgroundImage: `url(${background})` }}>
                <div className="DragDropContainer">
                    <p>I want to</p>
                    <div class="empty-card" onDrop={drop}
                        onDragOver={dragOver1}
                        id="board-1"></div>
                    <p>+</p>
                    <div class="empty-card" id="board-2"
                        onDrop={drop}
                        onDragOver={dragOver1}></div>
                    <p>=</p>
                    <button>Speak</button>
                    <button onClick={refreshPage}>Reset</button>
                </div>

                <div className="CardContainer">

                    <div className="card-container">
                        {cards.map((card) => (
                            <Card className="menu" id={card.title} style={{ width: '15rem' }} draggable
                            onDragStart={dragStart}
                            onDragOver={dragOver}>
                                <Card.Body>
                                    {
                                        <Card.Text className="card-text">
                                            <p key={card.title}>{card.title}</p>
                                        </Card.Text>
                                    }
                                    <Card.Img className="card-img" variant="top" src={card.img} />
                                </Card.Body>
                            </Card>
                        ))};
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}

export default DragDropTest;