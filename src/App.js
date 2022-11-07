import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Head from './Components/Head/Head';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
      </Routes>
    </div>
  );
}

export default App;
