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
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').innerText = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display the date and time immediately
