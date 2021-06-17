import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [portfolios, setPortfolio] = useState([]);
  const [value, setValue] = useState(0);

  const getPortfolios = async () => {
    try {
      const response = await fetch(url);
      const res = await response.json();

      setPortfolio(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect( () => {
    getPortfolios();
    console.log(portfolios);
  }, []);

  if(loading){
    return (
        <section className='section loading'>
          <h1>Loading...</h1>
        </section>
    );
  }
  const {company, dates, duties, title} = portfolios[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className='btn-container'>
          {portfolios.map( (item, index) => {
            return <button 
            key={index } 
            onClick={ () => setValue(index)}
            className={`job-btn ${index === value ? 'active-btn': ''}`}
            >
              { item.company }
            </button>
          })}
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map( (duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
