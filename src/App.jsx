import Header from './components/header';
import MainContent from './components/MainContent';
import MainApplication from './components/MainApplication';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <MainApplication>
      <Header />
      <MainContent />
      <Portfolio/>
    </MainApplication>
  );
}

export default App;
