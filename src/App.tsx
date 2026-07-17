import Intro from './components/Intro.js';
import Header from './components/common/Header.js';
import MainContent from './components/MainContent.js';
import MainApplication from './components/MainApplication.js';
import Skills from './components/Skills.js';
import ButtonCheck from './ui/ButtonCheck.js';
import MyPortfolio from './components/MyPortfolio.js';
import Footer from './components/common/Footer.js';
import WorkExperiance from './components/WorkExperiance.js';

function App() {
  return (
    <MainApplication>
      <Intro/>
      <Header />
      <MainContent />
      <ButtonCheck/>
      <Skills/>
      <MyPortfolio/>
      <WorkExperiance/>
      <Footer/>
    </MainApplication>
  );
}

export default App;
