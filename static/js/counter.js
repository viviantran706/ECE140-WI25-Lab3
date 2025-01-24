
let count = 0;

// Get DOM elements we'll be updating
const counterDisplay = document.getElementById('counterDisplay');
const saveStatus = document.getElementById('saveStatus');

// Function to update the counter
function updateCounter(change) {
    count += change;
    counterDisplay.textContent = count;
    // Clear any previous save status
    saveStatus.textContent = '';
}

// Function to save the counter to the server
async function saveCounter() {
    try {
        // Send POST request to our FastAPI endpoint
        const response = await fetch('/save_count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: count })
        });
        
        const data = await response.json();
        
        // Show save status
        saveStatus.textContent = data.message;
        
    } catch (error) {
        saveStatus.textContent = 'Error saving count';
        saveStatus.style.color = 'red';
    }
}

// Initialize counter from server when page loads
async function initializeCounter() {
    try {
        const response = await fetch('/save_count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: count })
        });

        const data = await response.json();
        saveStatus.textContent = data.message;
    } catch (error) {
        saveStatus.textContent = 'Error saving count';
        saveStatus.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeCounter();
});

window.onload = function () {
    alert("Welcome to the Counter App!"); // Pop-up alert when the page loads
};

function setConnectionStatus() {
    // once server counter is initialized with data from server
    // set div with id connectionStatus text content to "Connected" 
    // and color to green
    const connectionStatus = document.getElementById('connectionStatus');
    connectionStatus.textContent = "Connected";
    connectionStatus.style.color = "green";
}
