import React from 'react';
import {Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Calcul from './components/Tp1/Calcul';
import Slider from './components/Tp2/Slider';
import TodoList from './components/Tp3/TodoList';
import PageNotFound from './components/PageNotFound ';
import TpApi from './components/Tp4/TpApi';
import { ThemeProvider } from './components/ThemeContext';
export default function App() {

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    // Add your image URLs here
  ];


  return (
    <ThemeProvider>
    <div>
         <Menu />
         
          <Routes>
          <Route path="/" element={<Calcul />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Slider" element={<Slider images={images} />} />
          <Route path="/api" element={<TpApi />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
    </div>
    </ThemeProvider>
  )
}
