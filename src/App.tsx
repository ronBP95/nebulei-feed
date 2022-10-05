import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Feed, Recommend} from './container/index';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  );
};

export default App;
