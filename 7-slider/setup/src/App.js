import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';


function App() {
  const [peoples, setPeople] = useState(people);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if(value < 0){
      setValue(lastIndex);
    }
    if(value > lastIndex){
      setValue(0);
    }
  }, [value, peoples]);

  useEffect( () => {
    let slider = setInterval( () => {
      setValue(value + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [value]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {peoples.map( (person, index ) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if( index === value){
            position = 'activeSlide';
          }
          if(index === value - 1 || ( value === 0 && index === peoples.length - 1)){
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text' >{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setValue(value - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setValue(value + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
