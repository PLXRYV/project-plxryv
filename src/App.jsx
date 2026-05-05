import Intro from './components/Intro';
import Header from './components/header';
import MainContent from './components/MainContent';
import MainApplication from './components/MainApplication';
import Skills from './components/Skills';
import ButtonCheck from './components/ButtonCheck';
import MyPortfolio from './components/MyPortfolio';
import Footer from './components/Footer';

function App() {
  return (
    <MainApplication>
      <Intro/>
      <Header />
      <MainContent />
      <ButtonCheck/>
      <Skills/>
      <MyPortfolio/>
      <Footer/>
    </MainApplication>
  );
}

export default App;
