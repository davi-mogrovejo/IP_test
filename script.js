// Function to fetch and display the user's IP address
async function getIpAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        // Update the IP address on the webpage
        document.getElementById('ip-address').textContent = ipAddress;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        document.getElementById('ip-address').textContent = 'Error';
    }
}

// Call the function when the page loads
window.addEventListener('load', getIpAddress);
