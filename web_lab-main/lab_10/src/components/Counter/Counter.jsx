import { useState } from "react";
import './Counter.css';

const Counter = ({ initialCounter = 1, onChange }) => {
    const [counter, setCounter] = useState(initialCounter);

    const handleChange = (value) => {
        const newCounter = counter + value;
        setCounter(newCounter > 0 ? newCounter : counter);
        onChange(newCounter > 0 ? newCounter : counter);
    }

    return <div className="counter">
        <button className="counter-btn" onClick={() => {handleChange(-1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="counter-btn-img">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
        </button>
        <p>{counter}</p>
        <button className="counter-btn" onClick={() => {handleChange(1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="counter-btn-img">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
}

export default Counter;
