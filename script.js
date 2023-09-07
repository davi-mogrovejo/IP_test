// script.js
function getIPAddresses() {
    // Fetch IPv6 address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipv6').textContent = data.ip;
        })
        .catch(err => {
            console.error('Error fetching IPv6 address:', err);
            document.getElementById('ipv6').textContent = 'N/A';
        });

    // Fetch IPv4 address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipv4').textContent = data.ip;
        })
        .catch(err => {
            console.error('Error fetching IPv4 address:', err);
            document.getElementById('ipv4').textContent = 'N/A';
        });
}

window.onload = getIPAddresses;
