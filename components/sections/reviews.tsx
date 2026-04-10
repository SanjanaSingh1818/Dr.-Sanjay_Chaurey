"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Dr+Sanjay+Chaurey+PSRI+Hospital+Reviews";

// 👉 You can change rating + count anytime
const GOOGLE_RATING = 4.8;
const TOTAL_REVIEWS = 120;

const reviews = [
  {
    name: "Amit Verma",
    role: "New Delhi",
    text: "Dr. Sanjay Chaurey is extremely experienced. My laparoscopic surgery at PSRI Hospital went very smoothly and recovery was quick."
  },
  {
    name: "Pooja Sharma",
    role: "South Delhi",
    text: "He explains everything in a calm and clear manner. We felt very confident throughout the treatment process."
  },
  {
    name: "Rahul Mehta",
    role: "Gurgaon",
    text: "Highly professional and ethical doctor. The diagnosis was accurate and the surgery was handled perfectly."
  },
  {
    name: "Neha Kapoor",
    role: "Noida",
    text: "Very supportive doctor and staff at PSRI Hospital. Post-surgery care and follow-ups were excellent."
  },
  {
    name: "Sandeep Yadav",
    role: "Faridabad",
    text: "Dr. Chaurey gave practical advice and avoided unnecessary procedures. Truly trustworthy surgeon."
  },
  {
    name: "Kavita Singh",
    role: "Delhi NCR",
    text: "From consultation to discharge, everything was well managed. Very satisfied with the overall experience."
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.23 1.25-.93 2.3-1.98 3.02l3.21 2.49c1.87-1.72 2.95-4.25 2.95-7.24 0-.69-.06-1.35-.18-1.99H12Z" />
    <path fill="#34A853" d="M12 22c2.67 0 4.91-.88 6.55-2.38l-3.21-2.49c-.89.6-2.03.96-3.34.96-2.57 0-4.74-1.74-5.52-4.07H3.16v2.56A9.99 9.99 0 0 0 12 22Z" />
    <path fill="#4A90E2" d="M6.48 14.02a5.98 5.98 0 0 1 0-3.98V7.48H3.16a10 10 0 0 0 0 9.1l3.32-2.56Z" />
    <path fill="#FBBC05" d="M12 5.91c1.45 0 2.74.5 3.76 1.47l2.82-2.82C16.9 2.99 14.66 2 12 2a9.99 9.99 0 0 0-8.84 5.48l3.32 2.56C7.26 7.65 9.43 5.91 12 5.91Z" />
  </svg>
);

const ArrowIcon = ({ right = true }: { right?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 stroke-current ${right ? "" : "rotate-180"}`}
    fill="none"
  >
    <path d="M6 12h12" strokeWidth="2" strokeLinecap="round" />
    <path d="m13 6 6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getCardsPerPage(width: number) {
  if (width < 768) return 1;
  if (width < 1280) return 2;
  return 3;
}

function chunkReviews<T>(items: T[], size: number) {
  const output: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    output.push(items.slice(i, i + size));
  }
  return output;
}

export function HomePatientReviews() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setCardsPerPage(getCardsPerPage(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = useMemo(() => chunkReviews(reviews, cardsPerPage), [cardsPerPage]);

  useEffect(() => {
    setPageIndex((prev) => Math.min(prev, Math.max(0, pages.length - 1)));
  }, [pages.length]);

  return (
    <section className="bg-white py-10 md:py-12">
    <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2563eb]">
              Google Reviews
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#1f2937] md:text-4xl">
              What Our Patients Say
            </h2>

            <p className="mt-2 text-[#4b5563]">
              Feedback from patients treated by Dr. Sanjay Chaurey at PSRI Hospital, New Delhi.
            </p>

            {/* ⭐ Rating Badge */}
            <div className="mt-4 inline-flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-[#f8fbff] px-4 py-2">
              <GoogleIcon />

              <div className="flex items-center gap-1 text-[#f59e0b] text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-sm font-semibold text-[#1f2937]">
                {GOOGLE_RATING}
              </p>

              <p className="text-xs text-[#6b7280]">
                ({TOTAL_REVIEWS}+ reviews)
              </p>
            </div>
          </div>

          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#3b82f6] px-5 text-sm font-semibold text-[#3b82f6] hover:bg-[#e9f2ff]"
          >
            View Google Reviews <ArrowIcon />
          </Link>
        </div>

        {/* Slider (unchanged) */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {pages.map((page, idx) => (
              <div key={idx} className="w-full shrink-0">
                <div
                  className={`grid gap-4 ${
                    cardsPerPage === 1
                      ? "grid-cols-1"
                      : cardsPerPage === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                  }`}
                >
                  {page.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-xl border border-[#e5e7eb] bg-[#f8fbff] p-5"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#dbeafe] text-sm font-semibold text-[#1e3a8a]">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#1f2937]">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#6b7280]">
                              {item.role}
                            </p>
                          </div>
                        </div>
                        <GoogleIcon />
                      </div>

                      <div className="mb-3 flex gap-1 text-[#f59e0b]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed text-[#374151]">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
            disabled={pageIndex === 0}
            className="h-9 w-9 rounded-full border disabled:opacity-40"
          >
            <ArrowIcon right={false} />
          </button>

          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPageIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === pageIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}

          <button
            onClick={() =>
              setPageIndex((prev) => Math.min(pages.length - 1, prev + 1))
            }
            disabled={pageIndex === pages.length - 1}
            className="h-9 w-9 rounded-full border disabled:opacity-40"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}