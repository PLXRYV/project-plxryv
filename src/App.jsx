import Header from './components/header';
import MainContent from './components/MainContent';
import MainApplication from './components/MainApplication';
import TypingText from './components/MainContent'

function App() {
  return (
    <MainApplication>
      <Header />
      <TypingText text="Этот текст печатается..." speed={20} />
      <MainContent />
    </MainApplication>
  );
}

export default App;


