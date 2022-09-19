import React, { useState } from 'react';
import { GlobalStyles } from './Styles';
import { Home } from './Pages';
import { Route, Routes } from 'react-router-dom';


const App:React.FC = ()=> {

return (
    <>
    <GlobalStyles/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </>
  );
}

export default App;
