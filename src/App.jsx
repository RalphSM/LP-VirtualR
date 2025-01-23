import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"

const app =() => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt20 px-6">
        <HeroSection/>
      </div>
    </>
  )
}

export default app