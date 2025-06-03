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
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=zh_cn`
            );
            setWeatherData(res.data);
        } catch (err) {
            setError('城市未找到，请重试。');
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">🌤️ Weather Now</h1>
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="请输入城市名"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border rounded px-4 py-2 w-64"
                />
                <button
                    onClick={fetchWeather}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    查询
                </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {weatherData && (
                <div className="w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* 取未来 3 天的天气 */}
                    {weatherData.list
                        .filter((_, idx) => idx % 8 === 0)
                        .map((item, index) => (
                            <WeatherCard key={index} data={item} />
                        ))}
                </div>
            )}
        </div>
    )
}

export default App;