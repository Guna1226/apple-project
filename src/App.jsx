import Header from './components/Header'
import Hero from './components/Hero'
import Hero1 from './components/Hero1'
import HeroMacbook from './components/HeroMacbook'
import ProductSection from './components/ProductSection'
import AppleFooter from './components/AppleFooter'
import SplitHero from './components/SplitHero'
import ProductShowcaseGrid from './components/ProductShowcaseGrid'
import TVShowSlider from './components/TVShowSlider'

// ✅ Import your static assets
import iPhoneImg from './assets/images/iphone15.png'
import watch from './assets/images/watch.mp4'
import macbook from './assets/images/macbook.mp4'

export default function App() {
  return (
    <div className="font-sans bg-white dark:bg-dark text-black dark:text-white transition-colors">
      <Header />
      <Hero />
      <Hero1 /> {/* 🔥 iPhone 16 Hero section */}
      <HeroMacbook />
      <SplitHero />
      
      {/* ✅ Corrected image for MacBook Air */}
      <ProductSection
        title="MacBook Air"
        description="Supercharged by M2"
        video={macbook}
      />
      
      <ProductSection
        title="Apple Watch"
        description="Smarter. Brighter. Mightier."
        video={watch}
      />

      <ProductShowcaseGrid />
       <TVShowSlider />
      <AppleFooter />
    </div>
  )
}




