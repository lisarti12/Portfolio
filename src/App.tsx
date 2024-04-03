import Navbar from "./components/Navbar"
import InfoBox from "./components/InfoBox"
import Projects from "./components/Projects"
import ProjectTitle from "./components/ProjectTitle"
import Footer from "./components/Footer"
import Direct from "./components/Direct"


function App() {
  return (<>
      <div>
        <div>
          <Navbar />
          
        </div>
    
        <div>
          <InfoBox />
        </div>
        <div>
          <Direct />
        </div>
        <div>
          <ProjectTitle />
          <Projects />

        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
