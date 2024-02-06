import React from 'react';
import TrendsSearch from './TrendsSearch';
import TrendsFor from './TrendsFor';
import TrendsFollow from './TrendsFollow';
import TrendsFooter from './TrendsFooter';
function Trends() {
    return (
      <main className='trends' >
        <TrendsSearch/>
        <TrendsFor/>
        <TrendsFollow/>
        <TrendsFooter/>
      </main>
    );
  }
  
  export default Trends;