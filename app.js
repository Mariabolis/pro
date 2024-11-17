// api/app.js
module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { latitude, longitude } = req.body;

        // Log the received data to the console (for testing purposes)
        console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);

        // Send a response back to the client
        res.status(200).json({ message: 'Location received successfully!' });
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: 'Method not allowed' });
    }
};
