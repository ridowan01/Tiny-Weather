export function getWeatherRecommendation(current) {
    const temperature = current.temperature_2m;
    const windSpeed = current.wind_speed_10m;
    const rain = current.rain;
    const weatherCode = current.weather_code;

    if ([95, 96, 99].includes(weatherCode)) {
        return {
            icon: "⛈️",
            title: "Stay indoors if possible",
            message:
                "Thunderstorms are expected. Avoid open areas and keep an eye on local weather updates.",
        };
    }

    if ([61, 63, 65, 80, 81, 82].includes(weatherCode) || rain > 0) {
        return {
            icon: "☔",
            title: "Don't forget your umbrella",
            message:
                "Rain is expected. Consider carrying an umbrella and wearing water-resistant clothing.",
        };
    }

    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        return {
            icon: "🧥",
            title: "Dress warmly",
            message:
                "Snowy conditions are expected. Wear warm layers and be careful on slippery surfaces.",
        };
    }

    if (temperature >= 35) {
        return {
            icon: "🥵",
            title: "Stay cool and hydrated",
            message:
                "It is very hot outside. Drink plenty of water and avoid extended exposure to direct sunlight.",
        };
    }

    if (temperature >= 28) {
        return {
            icon: "🧴",
            title: "A warm day ahead",
            message:
                "Wear light clothing, use sunscreen, and stay hydrated throughout the day.",
        };
    }

    if (temperature <= 10) {
        return {
            icon: "🧣",
            title: "Bundle up",
            message:
                "The temperature is quite low. Wear warm layers before heading outside.",
        };
    }

    if (windSpeed >= 10) {
        return {
            icon: "🌬️",
            title: "A windy day",
            message:
                "Strong winds are expected. Secure loose items and take care when cycling or walking.",
        };
    }

    if ([45, 48].includes(weatherCode)) {
        return {
            icon: "🌫️",
            title: "Visibility may be reduced",
            message:
                "Foggy conditions are expected. Drive carefully and allow extra travel time.",
        };
    }

    return {
        icon: "✨",
        title: "A pleasant day",
        message:
            "The weather looks comfortable. It is a good time to enjoy some fresh air.",
    };
}
