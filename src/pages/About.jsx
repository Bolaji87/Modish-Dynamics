import React from "react";
import { BRAND_NAME } from "../utils/utils";

function About() {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-50">
      <div
        className="mb-10 h-[50vh] w-full bg-cover bg-center dark:brightness-75"
        style={{ backgroundImage: "url('/bundle-yard-here.webp')" }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-16">
        {/* Intro Paragraph */}
        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-50">
          Welcome to{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-300">
            {BRAND_NAME}
          </span>{" "}
          — Where Modesty Meets Modernity.
        </p>

        <p>
          At <strong>{BRAND_NAME}</strong>, we believe that modest fashion is a
          vibrant expression of identity, dignity, and creativity. Our mission
          is to design timeless Abayas and Jalabs that respect tradition while
          embracing modern sophistication. Whether you're dressing for a
          celebration, prayer, or your everyday life, our garments are tailored
          to reflect your values and elevate your presence.
        </p>

        {/* Our Story Section */}
        <div className="my-12 grid items-center gap-6 lg:grid-cols-2 dark:text-gray-50">
          <img
            src="/f-8.png"
            alt="Our story"
            className="h-64 w-full rounded-xl object-cover shadow dark:brightness-75"
          />
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Our Story</h2>
            <p className="leading-relaxed">
              Established in {formatted},{" "}
              <em className="font-semibold">{BRAND_NAME}</em> was founded with a
              vision to redefine modest fashion through elegant, purposeful
              design. Inspired by cultural heritage and modern aesthetics, our
              collections are shaped by a deep respect for modesty and a desire
              to empower people through what they wear. We focus on quality,
              dignity, and style that lasts.
            </p>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Our Commitment</h2>
          <ul className="list-inside list-disc leading-relaxed">
            <li>Designs that honor modest values with modern elegance</li>
            <li>Quality Abayas and Jalabs made with precision and care</li>
            <li>
              Inclusive fashion that embraces all backgrounds and identities
            </li>
            <li>Transparent sourcing and ethical craftsmanship</li>
            <li>Reliable shipping and excellent customer support</li>
          </ul>
        </div>

        {/* Closing Message */}
        <div className="mt-10">
          <p className="text-lg text-stone-700 dark:text-gray-50">
            Thank you for being part of{" "}
            <span className="font-semibold">{BRAND_NAME}</span>. Join a
            community that celebrates modest fashion without limits — grounded
            in authenticity, elevated by design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
