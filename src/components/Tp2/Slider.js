import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


import './slider.css';

function Slider({ images }){
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
  const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={darkMode ? 'home-dark' : 'home-light'}>
    <div className="container">
      <div className="slider-container">
      <h1 className='text-center mb-2'>{t(`slider.title`)}</h1>
       <p className='text-center'style={{fontSize:"20px"}}>{t('slider.description')}</p>
        <div className="row ">
          <div className="col-2 ">
        <button className='btn-slider info next' onClick={prevSlide}>
            <i class="fa-solid fa-arrow-left "></i>
        </button>
          </div>
          <div className="col-8">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {index === currentIndex && (
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} />
            )}
             <h3 className='text-center mt-3'>{index + 1}/{images.length}</h3>

          </div>
        ))}
      </div>
          </div>
      <div className="col-2">

      <button className='btn-slider info  prev' onClick={nextSlide}>
            <i class="fa-solid fa-arrow-right "></i>
      </button>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;
