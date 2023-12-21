import React from 'react';
import TrendsSearch from '../components/TrendsSearch';
import TrendsFor from '../components/TrendsFor';
import TrendsFollow from '../components/TrendsFollow';
import TrendsFooter from '../components/TrendsFooter';
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