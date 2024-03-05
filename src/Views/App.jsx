// Components
import Header from "../Components/Headers/Header";

// Styles
import "./styles.scss";

function App () {

    return (
        <>
            {/* Banner */}
            <div className="divider-banner">
                <div className="primera-division">
                    {/* Header */}
                    <Header />

                    {/* Texto */}
                    <div className='texto'>
                        <h1>Lorem ipsum</h1>
                        <h2>Neque porro quisquam</h2>
                        <p>
                            "Et aute voluptate cupidatat nisi eiusmod laborum non eu irure magna commodo."
                        </p>
                        <p>
                            "Anim officia sunt et enim nisi do exercitation fugiat sit aliquip commodo anim laboris aliquip."
                        </p>

                        <button className='button-banner' onClick={() => console.log('Go there')}>
                            Go there...
                            <div className="spacer-button"></div>
                            <span className="material-icons md-20">arrow_right</span>
                        </button>
                    </div>
                </div>

                <div className="segunda-division">
                    <img src="https://via.placeholder.com/300x800" width='100%' height='100%' />
                </div>
            </div>
        </>
    );
}

export default App;
