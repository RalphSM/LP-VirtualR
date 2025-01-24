import FeatureSection from "./Components/FeatureSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Workflow from "./Components/Workflow"
import Footer from "./Components/Footer"

const app =() => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt20 px-6">
        <HeroSection/>
      </div>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default app