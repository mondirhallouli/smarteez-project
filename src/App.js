import { useState, useEffect } from "react"
import './App.css';

function App() {
    let [count, setCount] = useState(0);
    let [countColor, setCountColor] = useState('#2c3e50');

    // change the color state only when the count's is updated
    useEffect(() => {
        if (count < 0) {
            setCountColor('#e74c3c');
        }
        else if (count > 0) {
            setCountColor('#3498db');
        }
        else {
            setCountColor('#2c3e50');
        }
    }, [count])

    const handleIncrement = (e) => {
        // make sure the correct button is clicked
        if (e.target.classList.contains("counter__increment")) {
            setCount(count + 1)
        }
    }
    const handleDecrement = (e) => {
        // make sure the correct button is clicked
        if (e.target.classList.contains("counter__decrement")) {
            setCount(count - 1)
        }
    }
    const handleReset = (e) => {
        // make sure the correct button is clicked
        if (e.target.classList.contains("counter__reset")) {
            setCount(0)
        }
    }

    return (
        <div className="App">
            <div className="counter">
                <h2 className='counter__count' style={{ color: countColor }}>
                    {count}
                </h2>
                <section className="counter__actions">
                    <div className="counter__actions-row-1">
                        <button
                            onClick={handleDecrement}
                            className='counter__decrement'
                        >
                            -
                        </button>
                        <button
                            onClick={handleIncrement}
                            className='counter__increment'
                        >
                            +
                        </button>
                    </div>
                    <div className="counter__actions-row-2">
                        <button
                            onClick={handleReset}
                            className='counter__reset'
                        >
                            Reset
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
