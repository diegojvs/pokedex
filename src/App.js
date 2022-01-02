import './App.css';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
          <h1 className="title">
            Pokédex
          </h1>
        </nav>
      </header>
      <Cards/>
    </div>
  );
}

export default App;
