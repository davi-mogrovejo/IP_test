// Function to send the user's IP address to the server
async function sendIpAddress() {
    try {
        const response = await fetch('send_ip.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'ip=' + encodeURIComponent(document.getElementById('ip-address').textContent),
        });

        if (response.ok) {
            console.log('IP address sent successfully');
        } else {
            console.error('Failed to send IP address');
        }
    } catch (error) {
        console.error('Error sending IP address:', error);
    }
}

// Call the function when the page loads
window.addEventListener('load', sendIpAddress);
