import Intro from './components/Intro';
import Header from './components/header';
import MainContent from './components/MainContent';
import MainApplication from './components/MainApplication';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <MainApplication>
      <Intro/>
      <Header />
      <MainContent />
      <Portfolio/>
    </MainApplication>
  );
}

export default App;
