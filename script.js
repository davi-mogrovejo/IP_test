// Function to get IPv4 and IPv6 addresses
function getIPs(callback) {
    // Use a third-party service to fetch IP addresses
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipv4Address = data.ip;
            const ipv6Address = window.location.origin;

            callback(ipv4Address, ipv6Address);
        })
        .catch(error => console.error(error));
}

// Function to update the HTML with IP addresses
function updateIPAddresses(ipv4, ipv6) {
    document.getElementById('ipv4').textContent = `IPv4 Address: ${ipv4}`;
    document.getElementById('ipv6').textContent = `IPv6 Address: ${ipv6}`;
}

// Call the getIPs function and update the HTML
getIPs(updateIPAddresses);
