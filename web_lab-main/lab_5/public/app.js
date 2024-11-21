const apiUrl = 'http://localhost:3001/api/planes';

async function fetchPlanes() {
    const response = await fetch(apiUrl);
    const planes = await response.json();
    drawPlanes(planes);
}

async function fetchSortedPlanes() {
    const checkboxChecked = document.getElementById('sort-checkbox').checked;
    const searchInput = document.getElementById('searchInput').value;
    const planes = await fetch(apiUrl).then(res => res.json());

    if (checkboxChecked) {
        await planes.sort((a, b) => b.passangers - a.passangers);
    }

    if (searchInput) {
        drawPlanes(planes.filter((el) => el.name.toLowerCase().includes(searchInput)));
    } else {
        drawPlanes(planes);
    }
}

async function addPlane(event) {
    event.preventDefault();
    const newPlane = {
        name: document.getElementById('name').value,
        Fuel_capacity: parseFloat(document.getElementById('fuelCapacity').value),
        passangers: parseInt(document.getElementById('passangers').value)
    };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlane)
    });
    fetchPlanes();
}

function drawPlanes(planes) {
    const container = document.getElementById('planeList');
    container.innerHTML = '';
    planes.forEach((plane, index) => {
        container.innerHTML += `
            <tr>
                <td>${plane.name}</td>
                <td>${plane.Fuel_capacity}</td>
                <td>${plane.passangers}</td>
                <td>
                    <button onclick="editPlane(${index})">Edit</button>
                    <button onclick="deletePlane(${index})">Delete</button>
                </td>
            </tr>`;
    });
}

async function deletePlane(index) {
    await fetch(`${apiUrl}/${index}`, { method: 'DELETE' });
    fetchPlanes();
}

let currentEditIndex = null;

function showModal() {
    document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

async function editPlane(index) {
    currentEditIndex = index;

    const response = await fetch(apiUrl);
    const planes = await response.json();
    const plane = planes[index];

    document.getElementById('editName').value = plane.name;
    document.getElementById('editFuelCapacity').value = plane.Fuel_capacity;
    document.getElementById('editPassangers').value = plane.passangers;

    showModal();
}

async function saveEdit() {
    const updatedPlane = {
        name: document.getElementById('editName').value,
        Fuel_capacity: parseFloat(document.getElementById('editFuelCapacity').value),
        passangers: parseInt(document.getElementById('editPassangers').value)
    };

    await fetch(`${apiUrl}/${currentEditIndex}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPlane)
    });

    closeModal();
    fetchPlanes();
}

document.getElementById('saveEditBtn').addEventListener('click', saveEdit);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

fetchPlanes();

const addNewBtn = document.getElementById('create-new-plane-btn');
addNewBtn.addEventListener('click', addPlane);

const applySearchBtn = document.getElementById('apply-search-btn');
applySearchBtn.addEventListener('click', () => {
    fetchSortedPlanes();
})

const averageBtn = document.getElementById('average-btn');
averageBtn.addEventListener('click', async () => {
    const planes = await fetch(apiUrl).then(res => res.json());
    const allPassengers = await planes.reduce((acc, current) => {return acc + current.passangers}, 0);
    alert(allPassengers / planes.length);
});
