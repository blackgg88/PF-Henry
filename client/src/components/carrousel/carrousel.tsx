import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';

import carrucelNext from "../../assets/home/carrucelNext.png"
import carrucelPrev from "../../assets/home/carrucelPrev.png"

const CARDS = 10;
// const MAX_VISIBILITY = 3;
const MAX_VISIBILITY = 2;

interface carr_children {
    children: any
}

interface StyleProps {
    '--active': number,
    '--offset': number,
    '--direction': number,
    '--abs-offset': number,
    'pointer-events': 'auto' | 'none',
    'opacity': '0' | '1',
    'display': 'none' | 'block',
  }
  

 const Carrousel = ({children}:carr_children) => {

    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' 
       style={{
        backgroundImage:`url(${carrucelPrev})`,
        
        }} 
      onClick={() => setActive(i => i - 1)}>.</button>}
      
      {React.Children.map(children, (child, i) => (
        <div className='Carrousel_card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          } as StyleProps }
          >
          {child}
        </div>
      ))}
      {active < count - 1 && <button style={{
        backgroundImage:`url(${carrucelNext})`,
        }} className='nav right' onClick={() => setActive(i => i + 1)}>.</button>}
    </div>
  )
}

export default Carrousel