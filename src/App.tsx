import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Gallery from './features/Gallery/Gallery';
import Cart from './views/Cart/Cart';
import Contact from './views/Contact/Contact';
import Favourites from './views/Favourites/Favourites';
import Homepage from './views/Homepage/Homepage';
import NotFound from './views/NotFound/NotFound';
import Order from './views/Order/Order';
import Trip from './views/Trip/Trip';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='' element={<Homepage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='trips' element={<Gallery/>}/>
          <Route path='trips/:id' element={<Trip/>}/>
          <Route path='favourites' element={<Favourites/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
