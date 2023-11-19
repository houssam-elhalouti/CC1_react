import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import './calcul.css';
function Calcul() {
    const { darkMode } = useContext(ThemeContext);

    const { t } = useTranslation();

    const [output, setoutput] = useState('');
    const afficher = (value)=> {
        setoutput(output + value)
    }
    const effacer = ()=>{
        setoutput('')
    }
    const calculer = ()=> {
        try{
            setoutput(eval(output).toString())
        }
        catch(erro) {
            setoutput("Erreur")
        }
    }

  return (
    <div className={darkMode ? 'home-dark' : 'home-light'}>
        <h1 className='text-center'>{t(`calcul.title`)}</h1>
        <p className="text-center" style={{fontSize:"20px"}}>{t('calcul.description')}</p>
        <p className='text-center'></p>
    <div className='calcul container'>
        <div className='calcul-simple'>
            <h1 className='text-center'>{t(`calcul.h1`)}</h1>
            <div className="">
                <div className="row">
                <div class="col-9">
                    <input type="text" value={output} name="" id="" className='w-100'/>
                </div>
                <div class="col-3">
                    <button className='w-100' onClick={effacer}>c</button>
                </div>
                </div> 

                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('1')}>1</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('2')}>2</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('3')}>3</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('+')}>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('4')}>4</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('5')}>5</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('6')}>6</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('-')}>-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('7')}>7</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('8')}>8</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('9')}>9</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('*')}>*</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('.')}>.</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('0')}>0</button>
                    </div>
                    <div className="col-3">
                    <button onClick={calculer} className='w-100'>=</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('/')}>/</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Calcul

