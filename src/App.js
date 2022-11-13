import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Head from './Components/Head/Head';
import Login from './Components/Login/Login';

import Registration from './Components/Registration/Registration'
import Homepage from './Components/Homepage/Homepage';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
     

        <Route path="/menu" element={  <RequireAuth><Menu></Menu></RequireAuth>}></Route>
        <Route path="/homepage" element={  <RequireAuth><Homepage></Homepage></RequireAuth>}></Route>
        <Route path="/" element={       <RequireAuth><Homepage></Homepage></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
  

      </Routes>
    </div>
  );
}

export default App;
