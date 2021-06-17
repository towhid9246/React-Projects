import React, { useState } from 'react';
import Review from './Review';


function App() {
  // const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews </h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
