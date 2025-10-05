"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";


export default function CustomerSection() {
  // --- Demo Data (swap with your real customers/testimonials) ---
  const logos = useMemo(
    () => [
      { name: "Acme", svg: Wordmark("Acme") },
      { name: "Globex", svg: Wordmark("Globex") },
      { name: "Umbrella", svg: Wordmark("Umbrella") },
      { name: "Initech", svg: Wordmark("Initech") },
      { name: "Hooli", svg: Wordmark("Hooli") },
      { name: "Vehement", svg: Wordmark("Vehement") },
      { name: "Stark", svg: Wordmark("Stark") },
      { name: "Wayne", svg: Wordmark("Wayne") },
      { name: "Wonka", svg: Wordmark("Wonka") },
      { name: "Soylent", svg: Wordmark("Soylent") },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Swapped our old stack for this platform and never looked back. Conversion up 18% in the first month.",
        author: "Mira Kapoor",
        role: "Head of Growth, Acme",
      },
      {
        quote:
          "Ridiculously fast to integrate. Support actually listens. Our team ships twice as fast now.",
        author: "Arjun Mehta",
        role: "CTO, Globex",
      },
      {
        quote:
          "Zero drama rollout across 9 regions. The analytics alone paid for the migration.",
        author: "Neha Sharma",
        role: "VP Product, Initech",
      },
      {
        quote:
          "From POC to production in a week. That’s unheard of for us. Stellar docs as well.",
        author: "Ravi Iyer",
        role: "Director of Engineering, Hooli",
      },
    ],
    []
  );

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-neutral-950">
      {/* Decorative gradient blobs */}
      <BackgroundDecoration />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
            <SparkleIcon className="h-3.5 w-3.5" /> Trusted by 10,000+ teams
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Customers who run on <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text">your product</span>
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Social proof that isn’t shy. Real brands, real results. Drop this section into your homepage or pricing page.
          </p>
        </div>

        {/* Logo Marquees */}
        <div className="mt-12 space-y-6">
          <LogoMarquee items={logos} speed={25} direction="left" />
          <LogoMarquee items={[...logos].reverse()} speed={25} direction="right" />
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel items={testimonials} intervalMs={5000} />
      </div>

      {/* Local styles for marquee keyframes */}
      <style>{`
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

// --- Components ---

function LogoMarquee({ items, speed = 30, direction = "left" }) {
  // create a duplicated list so we can seamlessly loop
  const doubled = useMemo(() => [...items, ...items], [items]);
  const duration = Math.max(10, Math.min(60, speed));
  const dir = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/40">
      <div
        className={reduce-motion flex min-w-max gap-10 whitespace-nowrap will-change-transform}
        style={{
          animation: ${dir} ${duration}s linear infinite,
        }}
      >
        {doubled.map((logo, idx) => (
          <LogoBadge key={idx} title={logo.name} svg={logo.svg} />
        ))}
      </div>
    </div>
  );
}

function LogoBadge({ title, svg }) {
  return (
    <div
      className="group inline-flex h-16 min-w-[160px] items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
      aria-label={${title} logo}
    >
      <div className="opacity-70 transition group-hover:opacity-100">
        {svg}
      </div>
    </div>
  );
}

function TestimonialsCarousel({ items, intervalMs = 6000 }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Handle keyboard left/right for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={stop}
      onMouseLeave={start}
      ref={containerRef}
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {items.map((t, i) => (
          <blockquote
            key={i}
            className="px-8 py-10 sm:px-12 sm:py-14"
            style={{ display: i === index ? "block" : "none" }}
            aria-hidden={i === index ? "false" : "true"}
          >
            <div className="flex items-center gap-2 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-neutral-800 dark:text-neutral-100">
              “{t.quote}”
            </p>
            <footer className="mt-6 flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
              <Avatar name={t.author} />
              <div>
                <div className="font-medium text-neutral-900 dark:text-white">{t.author}</div>
                <div>{t.role}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          aria-label="Previous testimonial"
        >
          ← Prev
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index
                  ? "bg-indigo-600"
                  : "bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              }`}
              onClick={() => setIndex(i)}
              aria-label={Go to testimonial ${i + 1}}
              aria-current={i === index}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          aria-label="Next testimonial"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// --- Little helpers (all self-contained) ---

function BackgroundDecoration() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-blue-500/10 blur-3xl dark:from-indigo-500/15 dark:via-fuchsia-500/10 dark:to-blue-500/10" />
      <div className="absolute left-10 top-1/2 h-[16rem] w-[16rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 blur-2xl" />
    </div>
  );
}

function SparkleIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* small sparkle */}
      <path d="M5 11c2.5.3 3.7 1.5 4 4 .3-2.5 1.5-3.7 4-4-2.5-.3-3.7-1.5-4-4-.3 2.5-1.5 3.7-4 4z" />
      {/* big sparkle */}
      <path d="M13 4c3 .4 4.6 2 5 5 .4-3 2-4.6 5-5-3-.4-4.6-2-5-5-.4 3-2 4.6-5 5z" opacity=".75" />
    </svg>
  );
}

function Star({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M12 2.25l2.59 6.6 7.16.37-5.5 4.49 1.77 6.79L12 16.97l-6.02 3.53 1.77-6.79-5.5-4.49 7.16-.37L12 2.25z" />
    </svg>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-xs font-semibold text-white shadow-sm">
      {initials}
    </div>
  );
}

function Wordmark(text) {
  return (
    <svg
      width="120"
      height="22"
      viewBox="0 0 120 22"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-700 opacity-75 transition group-hover:opacity-100 dark:text-neutral-300"
    >
      <text
        x="0"
        y="16"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontSize="16"
        fontWeight="700"
        letterSpacing="1.5"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
}