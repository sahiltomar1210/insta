import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostView from './Component/Post-view/Post-view';
import LandingPage from './Component/LandingPage/LandingPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
     <Route path="/" element={<LandingPage/>}/>
     <Route path= "/post-view" element = {<PostView />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;