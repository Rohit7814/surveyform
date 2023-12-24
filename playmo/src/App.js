import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Age from './components/Age/Age';
import Exactage from './components/exactage/Exactage';
import Thankyou from './components/Thankyou/Thankyou';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes> 
      <Route index  path='/'   element={<Age   />}></Route>
      <Route  path='/Exactage/:age' element={<Exactage />}></Route>
      <Route  path='/End' element={<Thankyou />}></Route>
      </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
