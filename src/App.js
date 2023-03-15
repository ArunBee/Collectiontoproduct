import logo from './logo.svg';
import './App.css';
import './home.css';
import 'react-awesome-slider/dist/styles.css';

// Import pages 
import Home from './Home Page/Home';
import About from './About Page/About-page';
import Contact from './Contact Page/Contact';
import Collection from './Collection-Page/Collection';
import Dashboard from './Dashboard';
import Productdetail from './ProductdetailPage/Productdetail';
import Cart from './Cart-Page/Cart';

// Import navigation bar
import { BrowserRouter, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
//import Footer from './Footer';
import Header from './Header';
//import { Modal } from 'bootstrap';


function App() {
  return (
    <div className="App">

 <Header/>   

<BrowserRouter>
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
  <Link to='/collection'>Collection</Link>
  <Link to='/contact'>Contact</Link>  
  <Link to='/dashoard'>Dashboard</Link>
  <Link to='/productdetail'>Product Detail</Link>
  <Link to='/cart'>Cart</Link>

<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/> 
  <Route exact path='/collection' element={<Collection/>}/>
  <Route exact path='/contact' element={<Contact/>}/>   
  <Route exact path='/dashoard' element={<Dashboard/>}/>
  <Route exact path='/productdetail' element={<Productdetail/>}/>
  <Route path="/productdetail/:productId" element={<Productdetail/>}/>
  <Route path='/cart' element={<Cart/>}/> 
</Routes>
</BrowserRouter>
    </div>
  );
};

export default App;
