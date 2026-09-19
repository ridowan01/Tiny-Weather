import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getWeatherReport } from "../services/get-weather-report";
import { getWeatherCondition } from "../services/weather-conditions";
import { getWeatherRecommendation } from "../services/get-weather-recommendation";

export default function Weather() {
    const routerLocation = useLocation();
    const location = routerLocation.state?.location;

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadWeather() {
            try {
                const data = await getWeatherReport(location);
                setWeather(data);
            } catch (error) {
                setError("Unable to load weather data.");
            } finally {
                setLoading(false);
            }
        }

        if (location) {
            loadWeather();
        } else {
            setError("No location was provided.");
            setLoading(false);
        }
    }, [location]);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                    <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                    <h1 className="mt-5 text-2xl font-bold">Loading weather...</h1>
                    <p className="mt-2 text-white/60">
                        Getting the latest forecast
                    </p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center text-white">
                <div>
                    <div className="text-6xl">⚠️</div>
                    <h1 className="mt-5 text-2xl font-bold">{error}</h1>
                </div>
            </main>
        );
    }

    const current = weather.current;

    const condition = getWeatherCondition(
        current.weather_code,
        current.is_day === 1
    );

    const recommendation = getWeatherRecommendation(current);

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${condition.theme.background})`,
            }}
        >
            {/* Color overlay */}
            <div
                className={`absolute inset-0 bg-linear-to-br ${condition.theme.overlay}`}
            />

            {/* Decorative blur effects */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Page content */}
            <section className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-10 sm:px-6">
                <div className="w-full max-w-2xl rounded-4xl border border-white/20 bg-black/20 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-5">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/65">
                                {current.is_day === 1 ? "Daytime" : "Nighttime"}
                            </p>

                            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                                {location.name}
                            </h1>

                            <p className="mt-2 text-lg text-white/75">
                                {condition.title}
                            </p>
                        </div>

                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-5xl shadow-lg ring-1 ring-white/20">
                            {condition.icon}
                        </div>
                    </div>

                    {/* Main temperature */}
                    <div className="mt-12 flex items-start">
                        <span className="text-8xl font-extrabold leading-none tracking-tight sm:text-9xl">
                            {Math.round(current.temperature_2m)}
                        </span>

                        <span className="mt-2 text-4xl font-light sm:text-5xl">
                            °C
                        </span>
                    </div>

                    <p className="mt-4 text-white/75">
                        Feels like{" "}
                        <span className="font-semibold text-white">
                            {Math.round(current.apparent_temperature)}°C
                        </span>
                    </p>

                    {/* Weather details */}
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <WeatherStat
                            icon="💧"
                            label="Humidity"
                            value={`${current.relative_humidity_2m}%`}
                        />

                        <WeatherStat
                            icon="🌬️"
                            label="Wind"
                            value={`${current.wind_speed_10m} m/s`}
                        />

                        <WeatherStat
                            icon="🌧️"
                            label="Rain"
                            value={`${current.rain} mm`}
                        />

                        <WeatherStat
                            icon="🔵"
                            label="Pressure"
                            value={`${Math.round(current.surface_pressure)} hPa`}
                        />
                    </div>

                    {/* Recommendation */}
                    <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                                {recommendation.icon}
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                                    Today's recommendation
                                </p>

                                <h2 className="mt-1 text-lg font-bold">
                                    {recommendation.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-white/75">
                                    {recommendation.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function WeatherStat({ icon, label, value }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-xl">{icon}</div>
            <p className="mt-3 text-xs text-white/60">{label}</p>
            <p className="mt-1 text-sm font-bold sm:text-base">{value}</p>
        </div>
    );
}
