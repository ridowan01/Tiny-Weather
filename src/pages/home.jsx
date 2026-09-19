import { useState } from "react";
import Modal from "./modal";

const features = [
  {
    icon: "🌤️",
    title: "Live conditions",
    description: "See temperature, wind, humidity, and more.",
  },
  {
    icon: "📍",
    title: "Any location",
    description: "Search for any city around the world.",
  },
  {
    icon: "⚡",
    title: "Instant results",
    description: "Get a clear forecast in just a few seconds.",
  },
];

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-200 via-blue-100 to-indigo-200">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-112 w-md rounded-full bg-cyan-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-128 w-lg rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      {/* Decorative clouds */}
      <div className="pointer-events-none absolute left-[8%] top-[16%] animate-pulse text-7xl opacity-30 blur-[1px]">
        ☁️
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[24%] animate-pulse text-6xl opacity-25 blur-[1px] [animation-delay:700ms]">
        ☁️
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[12%] text-5xl opacity-20">
        ☁️
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 py-16 sm:px-8">
        {/* Top badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-lg shadow-blue-200/30 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Simple weather, beautifully presented
        </div>

        {/* Weather logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping rounded-4xl bg-white/40 duration-3000" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-4xl border border-white/80 bg-white/70 text-6xl shadow-2xl shadow-blue-300/40 backdrop-blur-xl transition duration-500 hover:rotate-3 hover:scale-105">
            🌤️
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-indigo-600">
            Your personal weather guide
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            Weather made
            <span className="block bg-linear-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text pb-3 text-transparent">
              wonderfully simple.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover current conditions for any city, complete with temperature,
            wind, humidity, rain, and atmospheric details.
          </p>

          {/* Action */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setClicked(true)}
              className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-indigo-500/30 transition duration-300 hover:-translate-y-1 hover:from-violet-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95"
            >
              Explore the weather

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <span className="text-base">✨</span>
              No complicated setup
            </span>
          </div>
        </section>

        {/* Feature cards */}
        <section className="mt-20 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-white/70 bg-white/50 p-6 text-center shadow-xl shadow-slate-300/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-2xl hover:shadow-indigo-200/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-md transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>

              <h2 className="mt-5 font-bold text-slate-800">
                {feature.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        {/* Footer hint */}
        <p className="mt-12 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
          Clear information • Better decisions
        </p>
      </main>

      {clicked && <Modal onClose={() => setClicked(false)} />}
    </div>
  );
}
