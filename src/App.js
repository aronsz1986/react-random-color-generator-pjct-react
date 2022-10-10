import './App.css';
import logo from './logo.svg';
import RandomColor from './RandomColor';

function App() {
  return (
    <div>
      <h1 className="banner">Random color generator</h1>
      <div>
        <RandomColor />
      </div>
    </div>
  );
}

export default App;
