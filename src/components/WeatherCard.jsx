// src/components/WeatherCard.jsx
function WeatherCard({ data }) {
    const date = new Date(data.dt_txt).toLocaleDateString();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
            <h2 className="font-semibold">{date}</h2>
            <img src={iconUrl} alt={data.weather[0].description} />
            <p className="capitalize">{data.weather[0].description}</p>
            <p>🌡️ {Math.round(data.main.temp)}°C</p>
        </div>
    );
}

export default WeatherCard;
