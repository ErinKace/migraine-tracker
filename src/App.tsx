import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Journal from './pages/journal/Journal'
import Login from './pages/login/Login'
import Insights from './pages/insights/Insights'
import Navbar from './components/Navbar'

function App() {

  return (<div>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/insights" element={<Insights/>}/>
      </Routes>
    </main>
  </div>)

}

export default App
