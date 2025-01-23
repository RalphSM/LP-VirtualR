import FeatureSection from "./Components/FeatureSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Workflow from "./Components/Workflow"

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
    </>
  )
}

export default app