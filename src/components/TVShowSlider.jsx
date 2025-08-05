import React from 'react';
import { FaApple } from 'react-icons/fa';

import youthp from '../assets/images/Youthp.jpg';
import hijack from '../assets/images/hijack.jpg';
import tedLasso from '../assets/images/ted-lasso.jpg';
import morningShow from '../assets/images/the-morning-show.jpg';
import foundation from '../assets/images/foundation.jpg';
import shrinking from '../assets/images/shrinking.jpg';
import invasion from '../assets/images/invasion.jpg';
import slowHorses from '../assets/images/slow-horses.jpg';

const shows = [
  {
    title: "Your Friends & Neighbours",
    subtitle: "Drama · Live your best lie.",
    image: youthp,
    link: "https://tv.apple.com/in/show/your-friends--neighbours/umc.cmc.74o37kzay0yuuub8iumddjsg",
  },
  {
    title: "Hijack",
    subtitle: "Thriller · Every second counts.",
    image: hijack,
    link: "https://tv.apple.com/in/show/hijack/umc.cmc.6223x3rrw4bey4qvn7z5dyz7",
  },
  {
    title: "Ted Lasso",
    subtitle: "Comedy · Believe in hope.",
    image: tedLasso,
    link: "https://tv.apple.com/in/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy",
  },
  {
    title: "The Morning Show",
    subtitle: "Drama · The news never sleeps.",
    image: morningShow,
    link: "https://tv.apple.com/in/show/the-morning-show/umc.cmc.4w4pnii9a1ka5o0840g1umi9",
  },
  {
    title: "Foundation",
    subtitle: "Sci‑Fi · A galactic epic unfolds.",
    image: foundation,
    link: "https://tv.apple.com/in/show/foundation/umc.cmc.5983fipzqbicvrveqq2g21f9i",
  },
  {
    title: "Shrinking",
    subtitle: "Comedy · Break the rules, heal yourself.",
    image: shrinking,
    link: "https://tv.apple.com/in/show/shrinking/umc.cmc.1p5dtz25qh9q9h6ydr4sxfw3e",
  },
  {
    title: "Invasion",
    subtitle: "Sci-Fi · They're already here.",
    image: invasion,
    link: "https://tv.apple.com/in/show/invasion/umc.cmc.5983fipzqbicvrveqq2g21f9i",
  },
  {
    title: "Slow Horses",
    subtitle: "Spy · Not your average agents.",
    image: slowHorses,
    link: "https://tv.apple.com/in/show/slow-horses/umc.cmc.4srx9v1xk8r9fx6a8xz3ya2p",
  },
];


export default function TVShowSlider() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {shows.map((show, index) => (
          <div
            key={index}
            className="relative min-w-[320px] h-[420px] bg-cover bg-center rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            style={{ backgroundImage: `url(${show.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 text-white p-6 z-10">
              <h2 className="text-2xl font-bold leading-tight mb-2">{show.title}</h2>
              <p className="text-sm mb-4">{show.subtitle}</p>
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200"
              >
                Stream now
              </a>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-xl">
              <FaApple className="inline mr-1" /> TV+
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

