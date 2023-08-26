import Header from './components/Header';
import Profilecard from './components/Profilecard';
import Navcard from './components/Navcard';
import About from './components/About';
// import Profilecard from './components/Profilecard';
import './App.css'
function App() {


  return(
    
    <div className='body'>
    <Header/>
    <Navcard/>
    <About/>
    <Profilecard/>
    </div>
    
  )
}

export default App
