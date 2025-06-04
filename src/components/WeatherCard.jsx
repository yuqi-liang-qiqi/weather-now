// src/components/WeatherCard.jsx
const WeatherCard = ({ data }) => {
    const date = new Date(data.dt * 1000);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = dayNames[date.getDay()];
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;

    // Weather description mapping for more natural English
    const weatherDescriptions = {
        'clear sky': 'Sunny',
        'few clouds': 'Partly Cloudy',
        'scattered clouds': 'Mostly Cloudy',
        'broken clouds': 'Cloudy',
        'overcast clouds': 'Overcast',
        'light rain': 'Slight Rain',
        'moderate rain': 'Moderate Rain',
        'heavy rain': 'Heavy Rain',
        'thunderstorm': 'Thunderstorms',
        'snow': 'Snowing',
        'mist': 'Misty',
        'shower rain': 'Showers',
        'rain': 'Rainy',
        'light snow': 'Light Snow',
        'heavy snow': 'Heavy Snow',
        'drizzle': 'Drizzling',
        'fog': 'Foggy',
        'haze': 'Hazy',
        'dust': 'Dusty'
    };

    const getNaturalWeatherDescription = (apiDescription) => {
        const desc = apiDescription.toLowerCase();
        return weatherDescriptions[desc] || apiDescription;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-200">
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{dayName}</h3>
                <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
                
                <div className="flex justify-center mb-4">
                    <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather[0].description}
                        className="w-20 h-20"
                    />
                </div>

                <div className="space-y-2">
                    <p className="text-3xl font-bold text-gray-800">
                        {Math.round(data.main.temp)}°C
                    </p>
                    <p className="text-sm text-gray-600">
                        {getNaturalWeatherDescription(data.weather[0].description)}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm text-gray-500">
                        <div>
                            <p>Humidity</p>
                            <p className="font-medium">{data.main.humidity}%</p>
                        </div>
                        <div>
                            <p>Wind Speed</p>
                            <p className="font-medium">{Math.round(data.wind.speed)} m/s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
