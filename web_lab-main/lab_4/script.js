const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const editModal = document.getElementById("editModal");
const closeEditModalBtn = document.getElementsByClassName("closeEdit")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

closeEditModalBtn.onclick = function() {
    editModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === editModal) {
        editModal.style.display = "none";
    }
}

document.getElementById("planeForm").onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);
    const passangers = parseFloat(document.getElementById("passangers").value);

    if ( parseFloat(fuelCapacity) <= 0 || parseInt(passangers) < 0 ) {
        alert('fuel capacity and passangers must be bigger than 0');
        return;
    }
    const isFloat = /\d+\.\d+/.test(
        passangers
    );
    if (isFloat){
        alert('passangers must be not float');
        return;
    }

    const newPlane = new Plane(name, fuelCapacity, passangers);
    showroomList.push(newPlane); 

    drawList(showroomList);
    modal.style.display = "none";
    document.getElementById("planeForm").reset();
}

document.getElementById("editPlaneForm").onsubmit = function(event) {
    event.preventDefault();

    const index = document.getElementById("editIndex").value;
    const name = document.getElementById("editName").value;
    const fuelCapacity = parseFloat(document.getElementById("editFuelCapacity").value);
    const weight = parseFloat(document.getElementById("editPassangers").value);


    if ( parseFloat(fuelCapacity) <= 0 || parseInt(passangers) < 0 ) {
        alert('fuel capacity and passangers must be bigger than 0');
        return;
    }
    const isFloat = /\d+\.\d+/.test(
        passangers
    );
    if (isFloat){
        alert('passangers must be not float');
        return;
    }

    showroomList[index] = new Plane(name, fuelCapacity, passangers); 

    drawList(showroomList);
    editModal.style.display = "none";
}

class Plane {
    constructor(name, Fuel_capacity, passangers) {
        this.name = name;
        this.Fuel_capacity = Fuel_capacity;
        this.passangers = passangers;
    }
}

const showroomList = [];

const data = [
    { "name": "f16", "Fuel_capacity": 2000.0, "passangers": 2 },
    { "name": "f15", "Fuel_capacity": 3000.0, "passangers": 2 },
    { "name": "f22", "Fuel_capacity": 5000.0, "passangers": 1 },
    { "name": "f35", "Fuel_capacity": 3000.0, "passangers": 2 },
    { "name": "messerschmit", "Fuel_capacity": 2500.0, "passangers": 2 },
    { "name": "boing 787", "Fuel_capacity": 15000.0, "passangers": 200 },
    { "name": "An225", "Fuel_capacity": 20000.0, "passangers": 15 },
    { "name": "An26", "Fuel_capacity": 1500.0, "passangers": 20 },
    { "name": "l39", "Fuel_capacity": 800.0, "passangers": 2 }
];

data.forEach((plane) => {
    showroomList.push(new Plane(plane.name, plane.Fuel_capacity, plane.passangers));
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
                    <li class="text-slate-500 text-sm">passangers: ${el.passangers}</li>
                </ul>
                <button class="mt-2 p w-24 border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all" onClick="deleteCard('showroom-${idx}')">Delete</button>
                <button class="mt-2 p w-24 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all" onclick="openEditModal(${idx})">Edit</button>
            </div>
        `;
    });
}

const openEditModal = (index) => {
    const plane = showroomList[index];
    document.getElementById("editIndex").value = index;
    document.getElementById("editName").value = plane.name;
    document.getElementById("editFuelCapacity").value = plane.Fuel_capacity;
    document.getElementById("editPassangers").value = plane.passangers;

    editModal.style.display = "block";
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
    showroomList.splice(cardIndex, 1);
}

const sortCheckbox = (checkbox) => {
    if (checkbox.checked) {
        currentList = [...showroomList];
        currentList.sort((a, b) => b.Fuel_capacity - a.Fuel_capacity);
        drawList(currentList);
    } else {
        drawList(showroomList);
    }
}

const alertAverageCapacity = () => {
    const average = showroomList.reduce((accumulator, currentPlane) => accumulator + currentPlane.Fuel_capacity, 0) / showroomList.length;
    alert(`Average Fuel Capacity: ${average}`);
}

drawList(showroomList);
