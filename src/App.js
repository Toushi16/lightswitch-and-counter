import MainContent from './components/MainContent';
import { DarkModeProvider } from './components/DarkModeContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        < MainContent />
      </DarkModeProvider>
    </div>
  );
}

export default App;
