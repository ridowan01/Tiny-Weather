const weatherConditions = [
    {
        codes: [0],
        title: "Clear sky",
        icon: "☀️",
        day: {
            background:
                "https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-sky-500/80 via-blue-500/50 to-orange-400/70",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1532978379173-523e16f371f2?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/90 via-indigo-950/70 to-blue-950/80",
        },
    },
    {
        codes: [1, 2, 3],
        title: "Partly cloudy",
        icon: "⛅",
        day: {
            background:
                "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-blue-500/80 via-sky-400/50 to-slate-500/60",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/90 via-blue-950/80 to-indigo-950/80",
        },
    },
    {
        codes: [45, 48],
        title: "Foggy",
        icon: "🌫️",
        day: {
            background:
                "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-500/80 via-gray-400/70 to-slate-700/80",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/95 via-slate-800/80 to-gray-900/90",
        },
    },
    {
        codes: [51, 53, 55, 56, 57],
        title: "Drizzle",
        icon: "🌦️",
        day: {
            background:
                "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-600/80 via-blue-500/60 to-cyan-700/80",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/95 via-blue-950/85 to-slate-900/95",
        },
    },
    {
        codes: [61, 63, 65, 66, 67, 80, 81, 82],
        title: "Rainy",
        icon: "🌧️",
        day: {
            background:
                "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-700/85 via-blue-700/70 to-cyan-900/80",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/95 via-blue-950/90 to-black/90",
        },
    },
    {
        codes: [71, 73, 75, 77, 85, 86],
        title: "Snowy",
        icon: "❄️",
        day: {
            background:
                "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-sky-200/80 via-blue-400/60 to-slate-600/70",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/95 via-blue-950/85 to-indigo-950/90",
        },
    },
    {
        codes: [95, 96, 99],
        title: "Thunderstorm",
        icon: "⛈️",
        day: {
            background:
                "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-slate-950/80 via-purple-900/70 to-blue-900/80",
        },
        night: {
            background:
                "https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?auto=format&fit=crop&w=2000&q=85",
            overlay: "from-black/95 via-purple-950/90 to-slate-950/95",
        },
    },
];

const defaultCondition = {
    title: "Unknown weather",
    icon: "🌡️",
    day: {
        background:
            "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=85",
        overlay: "from-slate-600/80 to-blue-700/80",
    },
    night: {
        background:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
        overlay: "from-slate-950/95 to-blue-950/95",
    },
};

export function getWeatherCondition(code, isDay) {
    const condition =
        weatherConditions.find((weather) => weather.codes.includes(code)) ??
        defaultCondition;

    return {
        ...condition,
        theme: isDay ? condition.day : condition.night,
    };
}
