import './App.scss';
import Navbar from './compon/Navbar';
import productdata from './compon/productsdata';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './compon/Home';
import Product from './compon/Product';
import Contectus from './compon/Contectus';

const App = () => {
  
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactus" component={Contectus} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
