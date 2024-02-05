import { useState } from 'react';
import NavBar from './components/NavBar';
import NewsBoard from './components/NewsBoard';

const App=()=>{
  const [categories,setCategories]=useState('general')
  return (
    <>
      <NavBar setCategories={setCategories}/>
      <NewsBoard categories={categories}/>
      
    </>
  );
}

export default App;
