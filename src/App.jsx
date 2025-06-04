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
            
            <footer className="mt-auto pt-8 text-center">
                <p className="text-gray-500 text-sm mb-3">Data provided by OpenWeather API</p>
                <a
                    href="https://github.com/yuqi-liang-qiqi/weather-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-400 text-xs hover:text-gray-600 transition-colors duration-200"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>View source</span>
                </a>
            </footer>
        </div>
    )
}

export default App;