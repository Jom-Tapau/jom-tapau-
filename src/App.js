import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Head from './Components/Head/Head';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration'

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
