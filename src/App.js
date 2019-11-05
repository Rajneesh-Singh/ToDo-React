import React, { useState } from 'react';
import './App.css';
import NavBars from './components/layout/NavBars'
import SearchBar from './components/layout/SearchBar'
import AddButton from './components/layout/AddButton';
import List from './components/layout/List'
import AllUserList from './components/layout/AllUserList'


const App = () => {
  const [showSearch, setShowSearch] = useState(false)
  const handleClick = (e) => {
    console.log('clicked')
    setShowSearch(!showSearch)
    
  }
  return (
    <div className="App">

      <NavBars />
      {/* <SearchBar /> */}
      {/* <AddButton  onClick ={}/> */}
      
      {showSearch ? <SearchBar /> : ''} 
      {/* <AddButton  /> */}
       { <button onClick={handleClick} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" style={{position:"absolute", bottom:"20px" ,right:"20px"}} >
        <i className="material-icons">add</i>
      </button> }

    </div>
   
   
   
       
    
  );
}

export default App;
