import GeneralInfo from './components/GeneralInfo';
import Educational from './components/Educational';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import './style.css';

function App() {

  return (
    <div className="app">
      <GeneralInfo />
      <Educational />
      <Experience /> 
    </div>
  )
}

export default App
