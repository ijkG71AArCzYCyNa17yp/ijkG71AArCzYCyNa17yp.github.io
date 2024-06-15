function showAdminPage() {
    document.getElementById('admin-page').classList.toggle('hidden');
}

function login() {
    const password = document.getElementById('admin-password').value;
    if (password === 'yourpassword') {
        document.getElementById('admin-controls').classList.remove('hidden');
    } else {
        alert('Incorrect password!');
    }
}

function updateStatus(status) {
    document.getElementById('status-indicator').innerText = status;
    localStorage.setItem('status', status); // Save status to local storage
}

function loadStatus() {
    const status = localStorage.getItem('status');
    if (status) {
        document.getElementById('status-indicator').innerText = status;
    }
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').innerText = dateTimeString;
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadStatus(); // Load the status when the page loads
    updateDateTime(); // Initial call to display the date and time immediately
    setInterval(updateDateTime, 1000); // Update the date and time every second
});
