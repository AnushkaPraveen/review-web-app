import Home from './components/home';
import Price from './components/priceList';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='canteen' element={<Price/>}/>
    </Routes>
    </BrowserRouter>
    
      
   
  );
}

export default App;
