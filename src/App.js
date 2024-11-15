import Footer from "./components/footer";
import HeroSection from "./components/heropage";
import Heropage from "./components/heropage";
import Services from "./components/sevicies";
import Testimonial from "./components/testemony";
import Workflow from "./components/workflow";

export default function App() {
  return (
    <div className="p-8">
      
      <HeroSection />
      <Services />
      <Workflow />
      <Testimonial />
      <Footer />
    </div>
  )
}