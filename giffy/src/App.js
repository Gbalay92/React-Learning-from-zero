import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'


function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Gbalay92',
      subscribe: true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src='/logo.png'></img>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
              path="/"/>
            <Route component={Detail}
              path="/search/:keyword"/>
          </GifsContextProvider>
          <ListOfGifs></ListOfGifs>
          {/* <button onClick={() => setGiffs(DIF_GIFS)}>Cambiar gifs</button>*/}
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
