import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createPortal } from "react-dom";
import { getGeolocation } from "../services/get-geolocation";

export default function Modal({ onClose }) {
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  function goToWeatherPage(location) {
    navigate("/weather", {
      state: { location },
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const value = city.trim();

    if (!value) {
      setErrorMsg("Please enter a city name.");
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    try {
      const location = await getGeolocation(value);

      if (!location) {
        setErrorMsg("Unable to find that location.");
        return;
      }

      goToWeatherPage(location);
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleGeoLocation() {
    if (!navigator.geolocation) {
      setErrorMsg("Geolocation is not supported by your browser.");
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        goToWeatherPage({
          name: "Current location",
          latitude,
          longitude,
        });

        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          setErrorMsg("Location permission was denied.");
        } else if (error.code === error.TIMEOUT) {
          setErrorMsg("Location request timed out.");
        } else {
          setErrorMsg("Unable to detect your location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-4xl bg-white shadow-2xl shadow-indigo-950/40">
        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-400/30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-indigo-400/30 blur-2xl" />

        {/* Header */}
        <header className="relative overflow-hidden bg-linear-to-br from-violet-600 via-indigo-600 to-blue-600 px-6 pb-8 pt-6 text-white">
          <div className="absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 left-20 h-40 w-40 rounded-full bg-white/10" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/75 transition hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-lg ring-1 ring-white/25 backdrop-blur-sm">
              <span className="text-3xl">🌤️</span>
            </div>

            <h1
              id="location-modal-title"
              className="text-2xl font-bold tracking-tight"
            >
              Find your weather
            </h1>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
              Search for a city or use your current location to get the latest
              forecast.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="relative space-y-5 p-6 sm:p-7">
          {errorMsg && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <span className="mt-0.5 text-base">⚠️</span>
              <p>{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search by city
            </label>

            <div className="group relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </span>

              <input
                id="city"
                type="text"
                placeholder="Enter a city, e.g. Dhaka"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                  setErrorMsg("");
                }}
                disabled={isLoading}
                autoComplete="off"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={!city.trim() || isLoading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Searching...
                </>
              ) : (
                <>
                  Get weather
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
              or
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Geolocation button */}
          <button
            type="button"
            onClick={handleGeoLocation}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-indigo-200 bg-indigo-50 px-6 py-3.5 font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-lg">📍</span>
            Use my current location
          </button>

          <p className="text-center text-xs text-slate-400">
            Location access is required to detect your position automatically.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}