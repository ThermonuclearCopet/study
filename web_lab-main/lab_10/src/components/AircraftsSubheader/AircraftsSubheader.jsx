import axios from "axios";

const AircraftsSubheader = ({ onApply }) => {
    const applyButtonHandler = () => {
        const sortType = document.getElementById('price-select').value;
        const searchInput = document.getElementById('search-input').value;

        console.log(sortType, searchInput)

        axios.get(`http://localhost:3001/aircrafts?search=${searchInput}&filterOrder=${sortType}`)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                onApply(data);
            })
    }

    return <nav className="">
        <select name="" id="price-select">
            <option value="toHigh">From lower to higher</option>
            <option value="toLow">From higher to lower</option>
        </select>

        <input type="text" id="search-input" placeholder="Search" />

        <button onClick={applyButtonHandler}>Apply</button>

    </nav>
}

export default AircraftsSubheader;
