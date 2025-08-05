// src/components/Hero.jsx
import iphoneVideo from '../assets/images/iphone.mp4';
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
  src={iphoneVideo}
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          iPhone 15 Pro
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Learn more
          </a>
          <a
            href="#"
            className="border border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Buy
          </a>
        </div>
      </div>
    </section>
  );
}


