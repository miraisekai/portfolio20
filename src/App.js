import logo from './logo.svg';
import './App.css';
// import from react
import { useState } from 'react';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';
function App() {
  const [pages] = useState([
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    },

  ]);

  const [currentPage, setCurrentPage] = 
  useState(pages[0]);

  return (
    <div className="App">
    
      <Header>
        <Nav>
          
        </Nav>
      </Header>
      
      <Footer/>
     

    </div>
  );
}

export default App;
