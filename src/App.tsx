import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './views/Cart/Cart';
import Favourites from './views/Favourites/Favourites';
import Homepage from './views/Homepage/Homepage';
import NotFound from './views/NotFound/NotFound';
import Order from './views/Order/Order';
import Trips from './views/Trips/Trips';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='' element={<Homepage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='trips' element={<Trips/>}/>
          <Route path='favourites' element={<Favourites/>}/>
          <Route path='contact' element={<Homepage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
