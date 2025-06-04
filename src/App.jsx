// src/App.jsx

import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
    // “我们不再主动维护城市名 → 经纬度的匹配功能中的 bug。”
    // 但这个功能目前依然可用，特别是对于教学、Demo、非精确商业用途场景，完全够用。

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!city) return;
        try {
            setError(null);
            setWeatherData(null);
            const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=en`
            );
            setWeatherData(res.data);
        } catch (err) {
            setError('City not found. Please try again.');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchWeather();
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                    🌤️ Weather Now
                </h1>
                <p className="text-gray-600 text-sm">
                    Discover the weather forecast for any city worldwide
                </p>
            </div>
            
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mb-8">
                <p className="text-gray-500 text-xs mb-2 text-center">
                    Please enter city name in English (e.g., Beijing, Shanghai, Guilin)
                </p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    />
                    <button
                        onClick={fetchWeather}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition duration-200 shadow-md"
                    >
                        Search
                    </button>
                </div>
            </div>

            {error && (
                <div className="w-full max-w-md bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-600 text-center">{error}</p>
                </div>
            )}
            
            {weatherData && (
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {weatherData.list
                            .filter((_, idx) => idx % 8 === 0)
                            .map((item, index) => (
                                <WeatherCard key={index} data={item} />
                            ))}
                    </div>
                </div>
            )}
            
            <footer className="mt-auto pt-8 text-center text-gray-500 text-sm">
                <p>Data provided by OpenWeather API</p>
            </footer>
        </div>
    )
}

export default App;