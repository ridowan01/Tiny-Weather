export async function getWeatherReport(location) {
    const { name, latitude, longitude } = location;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,rain,weather_code,surface_pressure&wind_speed_unit=ms`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return data;
}