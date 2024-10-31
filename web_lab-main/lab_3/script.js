class Plane {
    constructor(name, Fuel_capacity, passengers) {
        this.name = name;
        this.Fuel_capacity = Fuel_capacity;
        this.passengers = passengers;
    }
}

const showroomList = [];
let currentList = [];

const data = [
    { "name": "f16", "Fuel_capacity": 2000.0, "passengers": 1.0 },
    { "name": "f15", "Fuel_capacity": 3000.0, "passengers": 2.0 },
    { "name": "f22", "Fuel_capacity": 5000.0, "passengers": 2.0 },
    { "name": "f35", "Fuel_capacity": 3000.0, "passengers": 2.0 },
    { "name": "messerschmit", "Fuel_capacity": 2500.0, "passengers": 2.0 },
    { "name": "boing 787", "Fuel_capacity": 15000.0, "passengers": 160.0 },
    { "name": "An225", "Fuel_capacity": 20000.0, "passengers":  15.0},
    { "name": "An26", "Fuel_capacity": 1500.0, "passengers": 25.0 },
    { "name": "l39", "Fuel_capacity": 800.0, "passengers": 2.0 }
];
data.forEach((plane) => {
    showroomList.push(new Plane(plane.name, plane.Fuel_capacity, plane.passengers));
});

const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = '';
    list.forEach((el, idx) => {
        showroom.innerHTML += `
            <div id="showroom-${idx}" class="w-40 bg-slate-200 p-2 rounded-[12px] mr-3 mt-5 h-[130px] text-center shadow-xl">
                <p class="text-lg">${el.name}</p>
                <ul>
                    <li class="text-slate-500 text-sm">Fuel capacity: ${el.Fuel_capacity}</li>
                    <li class="text-slate-500 text-sm">passengers: ${el.passengers}</li>
                </ul>
                <button class="mt-2 p w-24 border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all" onClick="deleteCard('showroom-${idx}')">delete</button>
            </div>
        `
    })
}

const clearSearch = () => {
    drawList(showroomList);
}

const searchCard = () => {
    const search = document.getElementById('search-input').value;
    currentList = showroomList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
    drawList(currentList);
}

const deleteCard = (cardId) => {
    const showroom = document.getElementById('showroom');
    showroom.removeChild(document.getElementById(cardId));
    const cardIndex = +cardId.slice(9);
    showroomList.splice(cardIndex);
}

const sortCheckbox = (checkbox) => {
    if (checkbox.checked) {
        currentList = [...showroomList];
        showroomList.length = 0;
        showroomList.push(...currentList);

        currentList.sort((a, b) => {
            if (a.Fuel_capacity < b.Fuel_capacity) {
                return 1;
            }
            else if (a.Fuel_capacity > b.Fuel_capacity) {
                return -1;
            }
            return 0;
        });
        drawList(currentList);
    } else {
        drawList(showroomList);
    }
}

const alertAverageCapasity = () => {
    const average = showroomList.reduce((accumulator, currentPlane, index, array) => {
        accumulator += currentPlane.Fuel_capacity;
        if (index === array.length - 1) {
            return accumulator / showroomList.length;
        }
        return accumulator;
    }, 0);

    alert(average);
}

drawList(showroomList);