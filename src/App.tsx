import Intro from '@components/Intro/Intro';
import Header from '@/components/common/Header/Header';
import MainContent from '@MainContent';
import MainApplication from './components/MainApplication/MainApplication';
import Skills from './components/Skills/Skills';
import ButtonCheck from './ui/ButtonCheck';
import MyPortfolio from './components/Portfolio/Portfolio';
import Footer from './components/common/Footer/Footer';
import WorkExperiance from './components/Experiance/Experiance';

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
