// Function to get the local IP address
function getLocalIpAddress() {
    return new Promise((resolve, reject) => {
        const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        const peerConnection = new RTCPeerConnection({ iceServers: [] });

        peerConnection.createDataChannel('');

        peerConnection.onicecandidate = (event) => {
            if (!event.candidate) {
                // All ICE candidates have been gathered
                peerConnection.close();
                resolve(null);
            } else {
                const localIpRegex = /\d+\.\d+\.\d+\.\d+/;
                const match = localIpRegex.exec(event.candidate.candidate);
                if (match) {
                    const localIpAddress = match[0];
                    peerConnection.close();
                    resolve(localIpAddress);
                }
            }
        };

        // Create an offer and set the local description
        peerConnection.createOffer()
            .then((offer) => peerConnection.setLocalDescription(offer))
            .catch(reject);
    });
}

// Call the function to get the local IP address
getLocalIpAddress()
    .then((localIp) => {
        if (localIp) {
            console.log('Local IP address:', localIp);
        } else {
            console.log('Local IP address not found.');
        }
    })
    .catch((error) => {
        console.error('Error getting local IP address:', error);
    });
