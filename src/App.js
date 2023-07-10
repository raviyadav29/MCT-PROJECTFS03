import { useState } from 'react';
import './App.css';
import Home from './Components/Context/Home';
import Login from "./Components/Context/Login";




function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  }
  return (
    <div className="App">
      {isloggedIn ? <Home /> : <Login login={login} />}
      {/* {
        (isloggedIn) ? <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} >
                <Route path='/profiledetails' element={<ProfileDetails/>} />
              </Route>
            </Routes>
          </BrowserRouter>

        </>
          :
          <>
            <Login login={login} />
          </>
      } */}

    </div>
  );
}

export default App;
