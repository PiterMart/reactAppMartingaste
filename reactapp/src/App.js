import './App.css';
import Nav from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';



function App() {
  const onAdd= (count, itemName) => {
    alert ("agregaste " + count + " " + itemName)

  }

  return (

    <div className="App">
      <header className="App-header">
        
        <Nav/>
        <ItemListContainer greeting="hola"/>
        <ItemCount initial={1} stock={10} itemName={"Camisa Negra"} onAdd={onAdd} />
        <ItemDetail/>

      </header>
    </div>
  );
}

export default App;
