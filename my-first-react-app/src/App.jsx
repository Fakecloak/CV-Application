import GeneralInfo from './components/GeneralInfo';
import Educational from './components/Educational';
import Experience from './components/Experience';
import './style.css';

function App() {

  return (
    <div className="app">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Educational />
      <Experience /> 
    </div>
  )
}

export default App
