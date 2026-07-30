import MainApplication from "./components/MainApplication/MainApplication.js";
import Intro from "./components/Intro/Intro.js";
import Header from "./components/common/Header/Header.js";
import MainContent from "./components/MainContent/MainContent.js";
import ButtonCheck from "./ui/ButtonCheck/ButtonCheck.js";
import Skills from "./components/Skills/Skills.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Experiance from "./components/Experiance/Experience.js";
import Footer from "./components/common/Footer/Footer.js";

function App() {
  return (
    <MainApplication>
      <Intro/>
      <Header />
      <MainContent />
      <ButtonCheck/>
      <Skills/>
      <Portfolio/>
      <Experiance/>
      <Footer/>
    </MainApplication>
  );
}

export default App;
