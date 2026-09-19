import { Link, NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50">
            {/* Background decoration */}
            <div className="pointer-events-none fixed -left-40 -top-40 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none fixed -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/20 bg-slate-950/85 text-white shadow-lg backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="group flex items-center gap-3"
                        aria-label="Tiny Weather home"
                    >
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-indigo-600 shadow-lg shadow-indigo-500/30 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                            <div className="absolute inset-0 rounded-2xl bg-white/10" />
                            <span className="relative text-2xl">🌤️</span>
                        </div>

                        <div>
                            <span className="block text-lg font-bold tracking-tight">
                                Tiny Weather
                            </span>
                            <span className="hidden text-xs text-slate-400 sm:block">
                                Weather made simple
                            </span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-2">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${isActive
                                    ? "bg-white/15 text-white shadow-inner"
                                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/weather"
                            className={({ isActive }) =>
                                `rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${isActive
                                    ? "bg-white/15 text-white shadow-inner"
                                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            Weather
                        </NavLink>

                        <Link
                            to="/"
                            className="ml-1 hidden items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40 sm:flex"
                        >
                            <span>Check weather</span>
                            <span>→</span>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="relative z-10 flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                    <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="inline-flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-indigo-600 text-2xl shadow-lg shadow-indigo-500/20">
                                    🌤️
                                </div>

                                <span className="text-xl font-bold">Tiny Weather</span>
                            </Link>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                                Simple, fast, and beautiful weather information for wherever
                                your day takes you.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                Weather made simple
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h2 className="font-semibold text-white">Explore</h2>

                            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400">
                                <Link
                                    to="/"
                                    className="transition hover:translate-x-1 hover:text-sky-400"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/weather"
                                    className="transition hover:translate-x-1 hover:text-sky-400"
                                >
                                    Weather
                                </Link>
                            </div>
                        </div>

                        {/* Technology */}
                        <div>
                            <h2 className="font-semibold text-white">Built with</h2>

                            <p className="mt-4 text-sm leading-6 text-slate-400">
                                Created with modern web technologies for a smooth and simple
                                experience.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                                    React
                                </span>

                                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                                    Tailwind CSS
                                </span>

                                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                                    Open-Meteo
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            Developed by{" "}
                            <span className="font-medium text-slate-300">
                                Ridowan Ahmed
                            </span>
                        </p>

                        <p>
                            © {new Date().getFullYear()} Tiny Weather. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}