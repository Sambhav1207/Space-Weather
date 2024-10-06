// NASA Space Weather API example (replace with real API key)
const API_KEY = '5OTev9FAp3MA17PFccPvZrLrh0AtbNyNxDa5xkl7';
const SOLAR_API_URL = `https://api.nasa.gov/DONKI/FLR?api_key=${API_KEY}`;

document.addEventListener('DOMContentLoaded', () => {
    // Fetch space weather data on load
    fetchSpaceWeather();

    // Fetch and display real-time space weather data
    function fetchSpaceWeather() {
        fetch(SOLAR_API_URL)
            .then(response => response.json())
            .then(data => {
                // Example: Display solar wind speed, solar flare intensity, and Kp index
                const solarWindSpeed = 500;  // Placeholder, replace with data from API
                const solarFlareIntensity = "X1.2";  // Placeholder, replace with data
                const kpIndex = 4;  // Placeholder, replace with data

                document.getElementById('solar-wind-speed').textContent = solarWindSpeed;
                document.getElementById('solar-flare').textContent = solarFlareIntensity;
                document.getElementById('kp-index').textContent = kpIndex;
                
                // Update chart with real-time space weather data
                updateChart([solarWindSpeed, kpIndex, solarFlareIntensity]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Chart.js to visualize space weather data
    const ctx = document.getElementById('spaceChart').getContext('2d');
    const spaceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Solar Wind Speed', 'KP Index', 'Solar Flare Intensity'],
            datasets: [{
                label: 'Space Weather Data',
                data: [0, 0, 0],  // Initial dummy data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateChart(data) {
        spaceChart.data.datasets[0].data = data;
        spaceChart.update();
    }
});
