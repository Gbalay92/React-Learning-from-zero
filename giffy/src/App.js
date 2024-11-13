import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from 'wouter';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path='/gif:keyword' component={ListOfGifs}/>
        <ListOfGifs></ListOfGifs>
        {/* <button onClick={() => setGiffs(DIF_GIFS)}>Cambiar gifs</button>*/}
      </section>
    </div>
  );
}

export default App;
