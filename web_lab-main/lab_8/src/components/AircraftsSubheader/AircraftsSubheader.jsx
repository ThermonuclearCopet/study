import { aircrafts } from "../../aircrafts";

const AircraftsSubheader = ({ onApply }) => {
    const applyButtonHandler = () => {
        const sortedList = [...aircrafts];

        const sortType = document.getElementById('price-select');
        const searchInput = document.getElementById('search-input');

        sortedList.sort((a, b) => parseInt(b.price.replace(/\s/g, '')) - parseInt(a.price.replace(/\s/g, '')))

        if (sortType.value === 'toHigh') {
            sortedList.reverse()
        }

        if (searchInput.value) {
            onApply(
                sortedList.filter((el) => el.name.toLowerCase().includes(searchInput.value.toLowerCase()))
            )
            return;
        }

        onApply(sortedList);
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
