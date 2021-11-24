import './App.css';
import Nav from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Nav/>
        <ItemListContainer greeting="hola"/>
      </header>
    </div>
  );
}

export default App;
