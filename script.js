function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('output').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;

                // Send data to the server
                fetch('http://localhost:3000/receive-location', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ latitude, longitude }),
                })
                .then(response => response.text())
                .then(data => {
                    console.log('Server response:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            },
            function (error) {
                alert('Unable to retrieve location. Please allow location access and try again.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
