// Function to detect and display IPv4 and IPv6 addresses
function detectIPAddresses() {
    // Try to fetch IPv6 address
    fetch('https://ipv6bot.whatismyipaddress.com/')
        .then(response => response.text())
        .then(ipv6 => {
            document.getElementById('ipv6').textContent = ipv6;
        })
        .catch(err => {
            document.getElementById('ipv6').textContent = 'IPv6 not available';
        });

    // Try to fetch IPv4 address
    fetch('https://ipv4bot.whatismyipaddress.com/')
        .then(response => response.text())
        .then(ipv4 => {
            document.getElementById('ipv4').textContent = ipv4;
        })
        .catch(err => {
            document.getElementById('ipv4').textContent = 'IPv4 not available';
        });
}

// Call the function when the page loads
window.onload = detectIPAddresses;
