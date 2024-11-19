import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='App-logo' alt='Giffy logo' src='/logo.png'></img>
        </Link>
        <Route 
          component={Home}
          path="/"/>
        <Route component={Detail}
          path="/search/:keyword"/>
        <ListOfGifs></ListOfGifs>
        {/* <button onClick={() => setGiffs(DIF_GIFS)}>Cambiar gifs</button>*/}
      </section>
    </div>
  );
}

export default App;
