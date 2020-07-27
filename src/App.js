import React from 'react';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <HelloWorld name = "Aron Owen"/>
        <Footer />
    </div>
  );
}

export default App;
