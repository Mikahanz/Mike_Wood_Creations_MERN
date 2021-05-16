import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={HomeScreen} />
        <Route path='/productdetail/:id' component={ProductDetail} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
