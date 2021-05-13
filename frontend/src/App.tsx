import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './screens/Homepage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
