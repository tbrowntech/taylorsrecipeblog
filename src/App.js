import jetski from './jetski.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jetski} className='jetSki-pic' alt='jetski'/>
        
        <p>
          SeaDoo Wake Pro.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
    </div>
  );
}

export default App;
