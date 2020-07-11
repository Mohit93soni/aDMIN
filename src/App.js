
import './App.css'
import React from 'react'  
import Header from './Header';
import Nav from './Nav'
import {Button,FontIcon} from 'react-md'
import Menu from './Menu';
import Content from './Content';
  // see @react-md/layout package for info on the main navigation
  function App() {
    return (
      <>
      <Header/>
      <Nav/>
      <Content/>
     </>
    );
  }
  
  export default App;