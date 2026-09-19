# Tiny Weather 🌤️

A simple, modern weather application built with React, React Router, Tailwind CSS, and Open-Meteo.

Tiny Weather lets users search for weather by city or use their browser's current location to view real-time weather conditions in a clean, responsive interface.

## Features

- Search for weather by city name
- Detect weather using the browser's current location
- Display current temperature and feels-like temperature
- Show humidity, wind speed, rainfall, and atmospheric pressure
- Weather condition descriptions based on WMO weather codes
- Dynamic backgrounds for different weather conditions
- Separate day and night themes
- Responsive design for mobile, tablet, and desktop
- Modern landing page with a location-selection modal
- Client-side routing with React Router
- Loading, validation, and error states
- Accessible buttons, labels, focus states, and dialog behavior
- No API key required

## Live Data

Weather data is provided by [Open-Meteo](https://open-meteo.com/):

- Open-Meteo Forecast API
- Open-Meteo Geocoding API

The application uses the following weather data:

- Temperature
- Apparent temperature
- Relative humidity
- Wind speed
- Rainfall
- Surface pressure
- Weather code
- Day/night status

## Built With

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- JavaScript
- Open-Meteo API
- Browser Geolocation API

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm

Check your installed versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/tiny-weather.git
```

Move into the project directory:

```bash
cd tiny-weather
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal. By default, Vite usually runs the application at:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
src/
├── layouts/
│   └── mainlayout.jsx
├── pages/
│   ├── home.jsx
│   ├── modal.jsx
│   └── weather.jsx
├── services/
│   ├── get-geolocation.js
│   ├── get-weather-report.js
│   └── weather-conditions.js
├── App.jsx
├── App.css
└── main.jsx
```

The project may also include configuration files such as:

```text
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Landing page with application introduction and weather search modal |
| `/weather` | Displays weather data for the selected city or current location |

The application uses a nested layout with React Router's `Outlet` component. The shared header and footer are rendered by `MainLayout`.

## How It Works

### Search by City

1. Click **Explore the weather** on the home page.
2. Enter a city name.
3. The application uses the Open-Meteo Geocoding API to find the city's coordinates.
4. The coordinates are passed to the weather page through React Router state.
5. The application requests current weather data from the Open-Meteo Forecast API.

### Use Current Location

1. Click **Explore the weather**.
2. Select **Use my current location**.
3. Allow location access in the browser.
4. The browser provides the current latitude and longitude.
5. The application loads weather data for those coordinates.

Browser geolocation generally requires a secure context, such as HTTPS, when deployed. It may also work on `localhost` during development.

## API Endpoints

### Geocoding API

Used to convert a city name into geographic coordinates:

```text
https://geocoding-api.open-meteo.com/v1/search
```

### Forecast API

Used to retrieve current weather conditions:

```text
https://api.open-meteo.com/v1/forecast
```

No API key or environment variables are required for the current implementation.

## Weather Conditions

The application maps Open-Meteo WMO weather codes to readable conditions, icons, and themed backgrounds.

Examples include:

- Clear sky
- Partly cloudy
- Foggy
- Drizzle
- Rainy
- Snowy
- Thunderstorm

Each condition includes separate visual themes for daytime and nighttime.

## Design

Tiny Weather uses:

- Gradient backgrounds
- Glassmorphism cards
- Rounded buttons and panels
- Responsive layouts
- Tailwind CSS utility classes
- Dynamic weather backgrounds
- Accessible focus states
- Mobile-first styling
- Loading and error feedback

## Error Handling

The application handles several common errors, including:

- Empty city searches
- Cities that cannot be found
- Failed API requests
- Denied location permission
- Geolocation timeouts
- Unsupported browser geolocation
- Missing weather location data
- Loading states while requests are in progress

## Deployment

Create a production build:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

You can deploy the `dist` directory to services such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting

When deploying the application, make sure your hosting provider supports client-side routing. For direct access to `/weather`, configure a fallback to `index.html` if required by the platform.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes.
4. Run the linter and production build:

   ```bash
   npm run lint
   npm run build
   ```

5. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

6. Push your branch:

   ```bash
   git push origin feature/new-feature
   ```

7. Open a pull request.

## License

This project is available under the MIT License.

## Author

Created by **Ridowan Ahmed**.