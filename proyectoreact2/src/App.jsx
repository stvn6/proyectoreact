
import './App.css'
import Contador from "./components/Contador/Contador.jsx";

function App() {


  return (
      <>
          <nav className="navbar navbar-light bg-light justify-content-between">
              <a className="navbar-brand"></a>
              <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </nav>
          <Contador/>


      </>
  )
}

export default App
